import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  return (
    <div className="">
      <header className="header">
        <Link to="/">Amazona</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
