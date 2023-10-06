"use client";
import Service from "../components/Service/Service";
import HomePage from "../components/Home/HomePage";
import Residencies from "../components/Residence/Residence";
import Value from "../components/Value/Value";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <HomePage />
      <Service />
      <Residencies />
      <Value />
    </main>
  );
}
