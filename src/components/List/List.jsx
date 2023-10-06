"use client";
import React from "react";
import "./List.css";
import Card from "./Card";
import data from "../Residence/data.json";
import { usePathname } from "next/navigation";
import ProductButtons from "../ProductButtons/ProductButtons";
import Notification from "../Notification";
const List = ({ data }) => {
  const pathName = usePathname();
  const isAdmin = pathName.includes("update-delete");
  return (
    <div className="lists">
      {data?.map((item, id) => (
        <article key={id} className="ariticleList">
          <Card item={item} />
          {isAdmin && <ProductButtons item={item} />}
        </article>
      ))}
      <Notification />
    </div>
  );
};

export default List;
