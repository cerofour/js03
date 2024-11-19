import ProductsTable from "./components/ProductsTable";
import Layout from "./components/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Page404 from "./pages/Page404";
import Sell from "./pages/Sell";

import "./index.css";

function App() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout></Layout>}>
				<Route path="/products" element={<Products/>}/>
				<Route path="/clients" element={<Clients/>}/>
				<Route path="/sell" element={<Sell/>}/>
				<Route path="*" element={<Page404/>}/>
			</Route>
		</Routes>
	</BrowserRouter>
  );
}

export default App;
