"use client";
import axios from "axios";

import { useState, useEffect } from "react";
function ProductDetails() {
	const [product, setProduct] = useState([]);
	const [num, setNum] = useState(1);
	// default setting of Javascript : use strict
	useEffect(() => {
		// function expression
		const getProduct = async () => {
			await axios.get(`/api/product/${num}`).then((res) => {
				console.log(res.data);
			});
		};
		getProduct(); // function call
		// console.log("UseEffect Called");
	}, [num]);

	const handleNumber = () => {
		setNum(num + 1);
	};
	return (
		<div>
			Product Details..... {num}
			<br />
			<button onClick={handleNumber}>Change Number</button>
		</div>
	);
}

export default ProductDetails;
