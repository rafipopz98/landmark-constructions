import React, { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import List from "@/components/List/List";
import { getAllAdminProjects } from "@/services/project";
const UpdateDelete = async () => {
  const allAdminProducts = await getAllAdminProjects();
  return (
    <div className="conn">
      <Navbar />
      <List data={allAdminProducts && allAdminProducts.data} />
    </div>
  );
};

export default UpdateDelete;
