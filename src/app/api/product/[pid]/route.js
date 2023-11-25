import { NextResponse } from "next/server";
import products from "@/app/assets/productInfo";

export async function GET(request, { params }) {
	const { pid } = params;
	let newpid = "P00" + pid;
	console.log("Product to search : " + newpid);
	return NextResponse.json({ productID: pid });
}
