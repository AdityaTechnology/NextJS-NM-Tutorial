import { NextResponse } from "next/server";

// HTTP GET
export async function GET(request) {
	return NextResponse.json({ message: "Get Request fulfilled" });
}

//HTTP POST
export async function POST(request) {
	let status = "";
	const userData = await request.json();
	console.log("Semester is :", userData.sem);

	if (userData.sem == 3) {
		status = "valid";
	} else {
		status = "Invalid";
	}
	return NextResponse.json({ status });
	// return NextResponse.json({ message: "POST request completed" });
}

// HTTP PUT
export async function PUT(request) {
	return NextResponse.json({ message: "PUT request completed" });
}

// HTTP DELETE
export async function DELETE(request) {
	return NextResponse.json({ message: "DELETE Request Fired" });
}
