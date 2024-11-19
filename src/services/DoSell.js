import { createAlova } from "alova";
import adapterFetch from "alova/fetch";

export const DoSell = async (clientId, productId) => {

	const alovaInstance = createAlova({
	  baseURL: 'http://localhost:8000', // URL base de tu JSON Server
	  timeout: 5000, // Tiempo de espera de 5 segundos
	  headers: {
	    'Content-Type': 'application/json',
	  },
	});

  try {
    // Obtener el producto para verificar el stock
    const productResponse = await alovaInstance.Get(`/products/${productId}`).send();
    const product = productResponse.data;

    if (product.stock === 0) {
      throw new Error('El producto está agotado y no se puede realizar la venta.');
    }

    // Registrar la venta
    const saleData = {
      clientId,
      productId,
      date: new Date().toISOString(),
      price: product.price,
    };
    await alovaInstance.Post(`/sales`, saleData).send();

    // Reducir el stock del producto
    const updatedProduct = { ...product, stock: product.stock - 1 };
    await alovaInstance.Put(`/products/${productId}`, updatedProduct).send();

    return { success: true, message: 'Venta realizada con éxito.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
