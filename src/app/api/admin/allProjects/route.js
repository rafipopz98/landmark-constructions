import { connectionDb } from "../../../../../src/database";
import Projects from "../../../../../src/models/project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectionDb();

    const extractData = await Projects.find({});

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "no products found",
      });
    }
  } catch (error) {
    console.log("fourth");
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
