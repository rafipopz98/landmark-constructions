import React from "react";
import List from "../../components/List/List";
import Navbar from "@/components/Navbar/Navbar";
import { getAllAdminProjects } from "@/services/project";
export const metadata = {
  title: `Landmark Constructions |Projects`,
  description:
    "Explore our diverse portfolio of architectural projects at Your Company Name. Our collection showcases stunning 3D house designs, captivating interior and exterior transformations, and innovative architectural artistry. Discover inspiration for your dream home improvement as you browse through our projects. Whether you're interested in interior design or enhancing your home's curb appeal, our projects offer creative solutions. Dive into the world of architectural excellence with Your Company Name.",
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
