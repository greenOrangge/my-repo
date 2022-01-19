import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export default function Homepage() {
  return (
    <main>
      <Navbar />
      <Search />
      <div className="card">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
