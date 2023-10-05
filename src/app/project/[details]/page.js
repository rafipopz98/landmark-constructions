import Detail from "@/components/Details/Detail";
import Project from "@/components/Project/Project";
import { projectBYYId } from "@/services/project";
import React from "react";

const page = async ({ params }) => {
  const productDetailsParams = await projectBYYId(params.details);
  // return <Detail />;
  return <Project item={productDetailsParams && productDetailsParams.data} />;
};

export default page;
