import React, { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import List from "@/components/List/List";
import { getAllAdminProjects } from "@/services/project";
const UpdateDelete = async () => {
  const allAdminProducts = await getAllAdminProjects();
  return (
    <div className="conn">
      <Navbar />
      <Suspense fallback={<p>Loadingggg</p>}>
        {/* @ts-expect-error Async Server Component */}
        <List data={allAdminProducts && allAdminProducts.data} />
      </Suspense>
    </div>
  );
};

export default UpdateDelete;
