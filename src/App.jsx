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
        <Route path="/Africa" element={<Africa />}></Route>
        <Route path="/Antarctica" element={<Antarctica />}></Route>
        <Route path="/Asia" element={<Asia />}></Route>
        <Route path="/NorthAmerica" element={<NorthAmerica />}></Route>
        <Route path="/SouthAmerica" element={<SouthAmerica />}></Route>
        <Route path="/Australia" element={<Australia />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return ( 
    <div>
     <h1>Welcome Home Page</h1>
     <Link className="link" to = "/Europa">Europa</Link>
     <Link className="link" to = "/Africa">Africa</Link>
     <Link className="link" to = "/Antarctica">Antarctica</Link>
     <Link className="link" to = "/Asia">Asia</Link>
     <Link className="link" to = "/NorthAmerica">NorthAmerica</Link>
     <Link className="link" to = "/SouthAmerica">SouthAmerica</Link>
     <Link className="link" to = "/Australia">Australia</Link>
     </div>
  )

}

function Europa() {
  return (
    <div>
      <h1>Welcome Europa Page</h1>
      <Link className="link" to="/">Home</Link>
    </div>
  );
}

function Africa() {
  return (
    <div>
      <h1>Welcome Africa Page</h1>
      <Link className="link" to = "/" >Home</Link>
    </div>
  )
}


function Antarctica() {
  return (
    <div>
      <h1>Welcome Antarctica Page</h1>
      <Link className="link" to = "/" >Home</Link>
    </div>
  )
}

function Asia() {
  return (
    <div>
      <h1>Welcome Asia Page</h1>
      <Link className="link" to = "/" >Home</Link>
    </div>
  )
}

function NorthAmerica() {
  return (
    <div>
      <h1>Welcome NorthAmerica Page</h1>
      <Link className="link" to = "/" >Home</Link>
    </div>
  )
}

function SouthAmerica() {
  return (
    <div>
      <h1>Welcome SouthAmerica Page</h1>
      <Link className="link" to = "/" >Home</Link>
    </div>
  )
}

function Australia() {
  return (
    <div>
      <h1>Welcome Australia Page</h1>
      <Link className="link" to = "/" >Home</Link>
    </div>
  )
}

export default App;
