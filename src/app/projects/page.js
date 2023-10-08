import React from "react";
import List from "../../components/List/List";
import Navbar from "@/components/Navbar/Navbar";
import { getAllAdminProjects } from "@/services/project";
export const metadata = {
  title: `All Projects`,
  description: "Showcasing all the best projects designed by Landmark Construction,Our Main ",
};
const page = async () => {
  const allAdminProducts = await getAllAdminProjects();
  return (
    <div className="conn"> 
      <Navbar />
      <List data={allAdminProducts && allAdminProducts.data} />
    </div>
  );
};

export default page;
