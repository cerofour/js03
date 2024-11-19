import { Form, Container, Table, Button } from "react-bootstrap";

import { useState } from "react";

import GetProducts from "../services/GetProducts";
import GetClients from "../services/GetClients";
import { DoSell } from "../services/DoSell";

function SellForm({products, clients, client, setClient, product, setProduct, handleSell}) {

	const productsOptions = products.map((product) => <option value={product.id} key={product.id}>{product.productName}</option>)
	const clientsOptions = clients.map((client) => <option value={client.id} key={client.id}>{client.name}</option>)

  return (
	<Form onSubmit={(e) => {e.preventDefault(); handleSell()}}>
      <Form.Group className="mb-3">
        <Form.Label>Usuario a vender</Form.Label>
        <Form.Select value={client} onChange={e => {console.log(e); setClient(e.target.value)}}>
			{clientsOptions}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Selecciona el producto a vender</Form.Label>
        <Form.Select value={product} onChange={e => setProduct(e.target.value)}>
			{productsOptions}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
		Vender
      </Button>
	</Form>
  );
}

export default function Sell() {
	const [products, setProducts] = useState([]);
	GetProducts(setProducts);

	const [clients, setClients] = useState([]);
	GetClients(setClients);

	const [selectedClient, setSelectedClient] = useState(0);
	const [selectedProduct, setSelectedProduct] = useState(0);

	const handleSell = () => {
	  if (!selectedProduct || !selectedClient) {
  		 alert('Por favor, selecciona un cliente y un producto antes de realizar la venta.');
    		return;
  		}

  		const result = DoSell(selectedClient, selectedProduct);
  			if (result.success) {
    			alert(result.message);
  			} else {
    			alert(`Error: ${result.message}`);
  			}	
		}

	return <>

		<h1>
			Realizar una venta
		</h1>
		<SellForm products={products}
				clients={clients}
				setClient={setSelectedClient}
				setProduct={setSelectedProduct}
				handleSell={handleSell}></SellForm>
	</>
}