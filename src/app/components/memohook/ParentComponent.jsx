"use client";
import { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
	const [num, setnum] = useState(0);
	const [meter, setMeter] = useState(0);

	console.log("Parent Called");
	const handleNumber = () => {
		setnum(num + 1);
	};

	// const handleMeter = (m) => {
	// 	setMeter(m);
	// 	console.log("Handle Meter");
	// };
	// useCallback(fn, dependency array)

	const handleMeter = useCallback(
		(m) => {
			setMeter(m);
			console.log("Handle Meter");
		},
		[meter] // dependency array.
	);

	// memo Hook : to memoize the component.
	// if the parent component is rendered then its all child component will also be rendered.
	// so we can optimize this by using memo hooks.
	// it will check whether any of the props has changed or not. If yes then only re-render that particular component otherwise don't render

	// useCallback : to memoize the function.

	return (
		<div>
			ParentComponent num : {num}
			<div>
				<button onClick={handleNumber}>Change Number</button>
			</div>
			<div>
				<p>Meter : {meter}</p>
				<ChildComponent
					handleMeter={handleMeter}
					meter={meter}
				/>
			</div>
		</div>
	);
}

export default ParentComponent;
