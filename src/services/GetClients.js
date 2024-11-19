import { useEffect } from "react";

import adapterFetch from "alova/fetch";
import { createAlova } from "alova";

export default function GetClients(setter) {

	const alovaInstance = createAlova({
		requestAdapter: adapterFetch()
	});

	useEffect(() => {
		alovaInstance
			.Get('http://localhost:8000/clients')
			.then(request => request.json())
			.then(setter)
			.catch(console.log);
	}, []);

}
