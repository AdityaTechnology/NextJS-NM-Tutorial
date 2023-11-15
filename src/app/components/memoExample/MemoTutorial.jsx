"use client";

import { useState, useMemo } from "react";

function MemoTutorial() {
	const [salary, setSalary] = useState(0);
	const [bonus, setBonus] = useState(0);

	const handleSalary = () => {
		setSalary(salary + 1000);
	};
	const handleBonus = () => {
		setBonus(bonus + 500);
	};

	// 1st arg : function, 2nd dependency Array
	const findTotal = useMemo(() => {
		for (let i = 0; i < 500000000; i++) {}
		return salary + salary * 0.5;
	}, [salary]);

	return (
		<>
			<div className='max-w-xl mx-auto mt-20 bg-gray-300 text-gray-900 min-h-[300px] text-center'>
				<h1>Use Memo Example</h1>
				<p>
					Salary : {salary} and Bonus = {bonus}
				</p>
				<p>Total Amount : {findTotal}</p>
				<button
					onClick={handleSalary}
					className='px-5 py-2 border border-orange-500 rounded-xl mt-5 mx-2'
				>
					Add Salary
				</button>
				<button
					onClick={handleBonus}
					className='px-5 py-2 border border-orange-500 rounded-xl mt-5 mx-2'
				>
					Add Bonus
				</button>
			</div>
		</>
	);
}

export default MemoTutorial;
