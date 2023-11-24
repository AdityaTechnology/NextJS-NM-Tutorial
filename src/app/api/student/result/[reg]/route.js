import { NextResponse } from "next/server";

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
export async function POST(request, { params }) {
	console.log(params);
	return NextResponse.json(stdList);
	// return NextResponse.json({
	// 	messge: "Result of student with regno " + params.reg,
	// });
}
