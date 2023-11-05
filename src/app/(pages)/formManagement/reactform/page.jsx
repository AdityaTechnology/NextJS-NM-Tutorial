"use client";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function UserFormPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (formData) => {
		console.log(formData);
	};

	// promise, async, await, fetch
	useEffect(() => {
		setTimeout(() => {
			console.log("Use Effect is called");
		}, 1000);
	}, []);

	return (
		<div className=' p-10 min-h-[400px] mt-20 max-w-4xl mx-auto bg-cyan-600'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='my-5'>
					<label>User Name</label>
					<input
						type='text'
						{...register("username", { required: true })}
					/>
					{errors.username && (
						<p className='text-yellow-500 mx-5'>
							This field is required. Please enter a username.
						</p>
					)}
				</div>
				<div>
					<label>Email</label>
					<input
						type='text'
						{...register("email", { required: true })}
					/>
					{errors.email && (
						<p className='text-yellow-500 mx-5'>
							This field is required. Please enter an email address.
						</p>
					)}
				</div>
				<div>
					<button type='submit'>Submit Form</button>
				</div>
			</form>
		</div>
	);
}

export default UserFormPage;
