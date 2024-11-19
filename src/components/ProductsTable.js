import GetProducts from "../services/GetProducts";
import { useState } from "react";
import React from "react";

import { Table } from "react-bootstrap";

export default function ProductsTable() {
	const [products, setProducts] = useState([]);

	GetProducts(setProducts);

	const productsTableBody = products.map((product) => (
		<tr>
			<td>{product.id}</td>
			<td>{product.productName}</td>
			<td>{product.price}</td>
			<td>{product.stock}</td>
		</tr>
	));

	return (
		<Table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Producto</th>
					<th>Precio</th>
					<th>Stock</th>
				</tr>
			</thead>
			<tbody>{productsTableBody}</tbody>
		</Table>
	);
}
