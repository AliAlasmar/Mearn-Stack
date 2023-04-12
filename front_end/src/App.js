import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="d-flex flex-column site-container">
      <header className="">
        {/* <Link to="/">Amazona</Link> */}
        <Navbar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand> Amazona</Navbar.Brand>
                </LinkContainer>
              </Container>
          </Navbar>
      </header>

      <main>
        <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
        </Container>
      </main>
      <footer className="text-center">
        <div className="text-center"><center >Copyright @ 2023</center></div>
      </footer>
    </div>
  );
}

export default App;
