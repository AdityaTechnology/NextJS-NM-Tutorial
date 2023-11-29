"use client";

import axios from "axios";
import { useState, useEffect } from "react";
function ProductInformationPage({ params }) {
	const [prdResult, setPrdResult] = useState(null);
	console.log(params);
	console.log("Render component");
	useEffect(() => {
		console.log("It is use Effect section");
		const getDetails = async () => {
			await axios.get(`/api/product/${params.pid}`).then((res) => {
				setPrdResult(res.data);
				console.log(res.data);
			});
		};
		getDetails();
	}, []);

	return (
		<div>
			{/* optional chaining  : ?.   */}
			Product Information Page of {params.pid}
			<div>Product Name is {prdResult?.name}</div>
			<div>Product Price : Rs.{prdResult?.price} Only</div>
		</div>
	);
}

export default ProductInformationPage;
