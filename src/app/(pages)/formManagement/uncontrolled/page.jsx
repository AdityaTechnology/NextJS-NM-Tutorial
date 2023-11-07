"use client";

import { useRef } from "react";
function UncontrolledPage() {
	const nameRef = useRef();
	const emailRef = useRef();

	const handleForm = (e) => {
		e.preventDefault();
		let username = nameRef.current.value;
		let email = emailRef.current.value;

		let userInfo = {
			username: username,
			email: email,
		};
		console.log("Username : ", username, " Email = ", email);
		//console.log(nameRef.current.value);
		console.log(userInfo);
	};
	return (
		<>
			<div className='max-w-xl mx-auto mt-20 bg-cyan-500 py-5'>
				<h1 className='p-5'>Uncontrolled Form Example</h1>
				<div>
					<form onSubmit={handleForm}>
						<div>
							<div className='py-2'>
								<label htmlFor='name'>Name: </label>
								<input
									type='text'
									ref={nameRef}
								/>
							</div>
							<div>
								<label htmlFor='email'>Email: </label>
								<input
									type='email'
									ref={emailRef}
								/>
							</div>
							<div>
								<button
									className='w-full px-5 py-2 bg-orange-700  text-white  mt-5 text-center'
									type='submit'
								>
									Login
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default UncontrolledPage;

// comA --> compB ---> compC ...... nth
// x=90                              use x

// useContext
//  provider  : data supplier
//  consumer :  data consume
