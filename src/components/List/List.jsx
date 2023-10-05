"use client";
import React from "react";
import "./List.css";
import Card from "./Card";
import data from "../Residence/data.json";
const List = ({data}) => {
  return (
    <div className="lists">
      {data?.map((item, id) => (
        <article key={id} className="ariticleList">
          <Card item={item} />
        </article>
      ))}
    </div>
  );
};

export default List;
