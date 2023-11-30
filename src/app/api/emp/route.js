import { NextResponse } from "next/server";
import DBConnect from "@/app/mongodb/DBConnection";
import Info from "@/app/mongodb/models/information";
export async function GET(request) {
	await DBConnect();
	await Info.create({ empname: "testName  -1 ", address: "Muzaffarpur" });
	return NextResponse.json({ message: "GET" });
}
