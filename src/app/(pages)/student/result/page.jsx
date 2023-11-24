"use client";
import axios from "axios";

function ResultPage() {
	const stdList = [
		{
			regno: 1,
			name: "Kamal",
			sem: 2,
			marks: 56,
		},
		{
			regno: 2,
			name: "Manish",
			sem: 2,
			marks: 60,
		},
		{
			regno: 3,
			name: "Rakesh",
			sem: 6,
			marks: 61,
		},
		{
			regno: 4,
			name: "Lalit",
			sem: 5,
			marks: 36,
		},
	];

	const showDetails = async (reg) => {
		await axios.post(`/api/student/result/${reg}`).then((res) => {
			if (res.status == 200) {
				// console.log("Request is success");
				console.log(res.data);
			} else {
				console.log("Request failed");
			}
		});
		// console.log("details of ", reg);
	};
	return (
		<div className='max-w-4xl mx-auto mt-20'>
			<div className=''>
				{stdList.map((std, index) => {
					return (
						<div
							key={index}
							className='flex border border-gray-300 py-2 flex-row justify-between'
						>
							<div>{std.name}</div>
							<div>{std.sem}</div>
							<div>{std.marks}</div>
							<div>
								<button onClick={() => showDetails(std.regno)}>
									Show Details
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ResultPage;
