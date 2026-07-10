import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container">  
      <Navbar/>
      <Navbar/>
      <Navbar/>
      <Card />
      <Card />
      <Card />
      </div>
    </>
  );
}

export default App;
