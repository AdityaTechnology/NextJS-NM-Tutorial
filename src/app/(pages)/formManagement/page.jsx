"use client";

// Controlled Form Management
import { useState } from "react";

function FormManagementPage() {
	const [username, setUsername] = useState(null);
	const [email, setEmail] = useState();

	const handleUserName = (event) => {
		setUsername(event.target.value);
		//console.log(event.target.value);
	};
	const handleForm = (event) => {
		event.preventDefault();
		if (!username) console.log("Username required");
		//alert("form submitted");
	};
	return (
		<div>
			<form onSubmit={handleForm}>
				<div className='m-10'>
					<label>User Name</label>
					<input
						className='px-2 border border-green-700 appearance-none outline-none'
						type='text'
						onChange={handleUserName}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type='text'
						className='px-2 border border-green-700 appearance-none outline-none'
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div>
					User name = {username}, Email ID : {email}
				</div>
				<div>
					<button type='submit'>Submit form</button>
				</div>
			</form>
		</div>
	);
}

export default FormManagementPage;
