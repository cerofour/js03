import { Container, Navbar, Nav } from "react-bootstrap"

import { Link, Outlet } from "react-router-dom"

export default function Layout() {
	return (<>
		<Navbar bg="dark" data-bs-theme="dark">
      		<Container>
        		<Navbar.Brand href="/">JS Avanzado</Navbar.Brand>
        		<Navbar.Toggle aria-controls="basic-navbar-nav" />
        		<Navbar.Collapse id="basic-navbar-nav">
          		<Nav className="me-auto">
					<Nav.Link>
					<Link to="/products">
						Productos
					</Link>
					</Nav.Link>
					<Nav.Link>
					<Link to="/clients">
						Clientes
					</Link>
					</Nav.Link>
					<Nav.Link>
					<Link to="/sell">
						Realizar una venta
					</Link>
					</Nav.Link>
          		</Nav>
        		</Navbar.Collapse>
      		</Container>
    	</Navbar>

		<Container className="mt-4">
			<Outlet></Outlet>
		</Container>
	</>)
}