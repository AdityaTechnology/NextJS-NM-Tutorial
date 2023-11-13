"use client";
import { useState } from "react";

function MyReducerTemp() {
	const [num, setNum] = useState(0);

	const addTwo = () => {
		setNum(num + 2);
	};
	const reduceByTwo = () => {
		setNum(num - 2);
	};
	return (
		<div className='mt-10 mx-20'>
			MyReducer : {num}
			<div className='my-5'>
				<button
					onClick={addTwo}
					className='px-5 py-2  bg-orange-600 text-white font-bold rounded-lg mx-5'
				>
					Add 2
				</button>
				<button
					onClick={reduceByTwo}
					className='px-5 py-2 bg-orange-600 text-white font-bold rounded-lg mx-5 '
				>
					Reduce by 2
				</button>
			</div>
		</div>
	);
}

export default MyReducerTemp;
