import { Link } from "react-router-dom"
export default function Page404() {
	return(
	<>
		<h1>
			Esta página no existe
		</h1>
		<Link to="/">
			Regresar a la página principal
		</Link>
	</>);
}