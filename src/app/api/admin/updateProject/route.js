import { NextResponse } from "next/server";
import { connectionDb } from "../../../../../src/database";
import Project from "../../../../../src/models/project";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectionDb();
    const extractData = await req.json();

    const { _id, images, name, desc, bed, room } = extractData;
    const updateProduct = await Project.findOneAndUpdate(
      { _id: _id },
      {
        images,
        name,
        desc,
        bed,
        room,
      },
      { new: true }
    );

    if (updateProduct) {
      return NextResponse.json({
        success: true,
        message: "Product updates successfully",
      });
    } else {
      console.log("second error");
      return NextResponse.json({
        success: false,
        message: "Failed to update the product ! please try again",
      });
    }
  } catch (error) {
    console.log("fourth here da");
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
