"use client";

import { useState } from "react";
function EventPage() {
	// let num = 0;
	let marks = [11, 2, 33, 44, 55];
	let [num, setNum] = useState(10);

	const btnClick = () => {
		//alert("Button clicked");
		// num = num + 1;
		setNum(num + 1);
		console.log("Num = ", num);
	};
	return (
		<div>
			<p>Number = {num}</p>
			{marks.map((n) => {
				return <p className='border border-gray-500'>numbers = {n}</p>;
			})}
			<button onClick={btnClick}>Click Here</button>
		</div>
	);
}

export default EventPage;
