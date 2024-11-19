import { useState } from "react";
import React from "react";

import { Table } from "react-bootstrap";

import GetClients from "../services/GetClients";

export default function ClientsTable() {
	const [clients, setClients] = useState([]);

	GetClients(setClients);
	console.log(clients);

	const clientsTableBody = clients.map((client) => (
		<tr>
			<td>{client.id}</td>
			<td>{client.name}</td>
			<td>{client.email}</td>
		</tr>
	));

	return (
		<Table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Correo</th>
				</tr>
			</thead>
			<tbody>{clientsTableBody}</tbody>
		</Table>
	);
}
