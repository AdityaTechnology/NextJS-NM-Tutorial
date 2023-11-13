"use client";
import { useReducer, useState, useEffect } from "react";

let initialState = 0;

const reducer = (state, action) => {
	switch (action) {
		case "add":
			return state + 2;
		case "substract":
			return state - 2;
		default:
			return state;
	}
};
function MyReducerExample() {
	//    useReducer(fn, initialState);
	const [num, dispatch] = useReducer(reducer, initialState);

	// const [price,setPrice] = useState(0);
	// const [cartItems, setCartItems] = useState(0)

	// let initialProducts = {
	//     price:0,
	//     cartItems:0
	// }

	// spread Operator | rest operato | object destructuring

	let initialProducts = {
		price: 2000.9,
		cartItems: 4,
	};

	let numItems = [11, 22, 33, 44];
	let [x, , y] = [...numItems];

	let { price, cartItems } = initialProducts;

	useEffect(() => {
		const display = (...vals) => {
			console.log(vals);
		};
		display(10, 20, 56);
	}, []);

	return (
		<div className='mt-10 mx-20'>
			<p>
				Price : {price}, Items : {cartItems}, N1 = {x}, N2 = {y}
			</p>
			MyReducer : {num}
			<div className='my-5'>
				<button
					onClick={() => dispatch("add")}
					className='px-5 py-2  bg-orange-600 text-white font-bold rounded-lg mx-5'
				>
					Add 2
				</button>
				<button
					onClick={() => dispatch("substract")}
					className='px-5 py-2 bg-orange-600 text-white font-bold rounded-lg mx-5 '
				>
					Reduce by 2
				</button>
			</div>
		</div>
	);
}

export default MyReducerExample;
