import { useEffect, useState } from "react";

import adapterFetch from "alova/fetch";
import { createAlova } from "alova";

export default function GetProducts(setter) {

	const alovaInstance = createAlova({
		requestAdapter: adapterFetch()
	});

	useEffect(() => {
		alovaInstance
			.Get('http://localhost:8000/products')
			.then(request => request.json())
			.then(setter)
			.catch(console.log);
	}, []);

}
