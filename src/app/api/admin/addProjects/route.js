import Projects from "../../../../../src/models/project";
import { connectionDb } from "../../../../database/index";
import Joi from "joi";
import { NextResponse } from "next/server";

const addNewProjectSchema = Joi.object({
  images: Joi.array().required(),
  name: Joi.string().required(),
  desc: Joi.string().required(),
  bed: Joi.number().required(),
  room: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectionDb();

    const extractData = await req.json();

    const { images, name, desc, bed, room } = extractData;
    const { error } = addNewProjectSchema.validate({
      images,
      name,
      desc,
      bed,
      room,
    });

    if (error) {
      console.log("error at first");
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newProduct = await Projects.create(extractData);

    if (newProduct) {
      return NextResponse.json({
        success: true,
        message: "Product added successfully",
      });
    } else {
      console.log("second error");
      return NextResponse.json({
        success: false,
        message: "Failed to add the product ! please try again",
      });
    }
  } catch (error) {
    console.log("fourth ig here");
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
