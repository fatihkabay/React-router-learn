import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Europa" element={<Europa />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return ( 
     <h1>Welcome Home Page</h1>
  )

}

function Europa() {
  return (
    <div>
      <h1>Welcome Europa Page</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default App;
