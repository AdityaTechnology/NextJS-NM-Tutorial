"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function StudentPage() {
	const [message, setMessage] = useState("");
	const [semester, setSemester] = useState(0);
	const handleGet = async () => {
		await axios.get("/api/student").then((res) => {
			setMessage(res.data.message);
			console.log(res.data.message);
		});
		// console.log("Get Request fired");
	};

	const handlePost = async () => {
		let student = {
			stdName: "Tarun",
			sem: semester,
			branch: "IT",
			fee: 8000,
		};
		await axios.post("/api/student", student).then((res) => {
			setMessage(res.data.status);
			console.log(res.data);
		});
	};

	return (
		<div className='max-w-4xl mt-20 mx-auto'>
			StudentPage
			<div>
				Semester :
				<input
					type='number'
					onChange={(e) => setSemester(e.target.value)}
				/>
			</div>
			<div className='flex flex-row gap-5'>
				<button
					onClick={handleGet}
					className='px-5 py-1 bg-cyan-800 text-white'
				>
					GET Request
				</button>
				<button
					onClick={handlePost}
					className='px-5 py-1 bg-cyan-800 text-white'
				>
					POST Request
				</button>
			</div>
			<div className='m-10'>Messages : {message}</div>
		</div>
	);
}

export default StudentPage;
