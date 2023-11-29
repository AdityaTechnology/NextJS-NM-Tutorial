import { NextResponse } from "next/server";
import products from "@/app/assets/productInfo";

export async function GET(request, { params }) {
	const { pid } = params;
	let newpid = pid;
	let result = {};
	for (let i = 0; i < products.length; i++) {
		if (products[i].pid == pid) {
			result = products[i];
			break;
		}
	}
	console.log(result);
	// console.log("Result: " + result);
	return NextResponse.json(result);
}
