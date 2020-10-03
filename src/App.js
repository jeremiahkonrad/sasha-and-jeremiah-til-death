import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">😻 S + J</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link">Our Story</Nav.Link>
              <NavDropdown title="Day of" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Itinerary
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Dress Code
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Menu</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Location</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link href="#link">Gifts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <h1>Sasha and Jeremiah til Death</h1>
              <p>More info to come...</p>
              <p>home</p>
            </header>
          </Route>
          <Route path="/our-story">
            <p>Our Story</p>
          </Route>
          <Route path="/contact-us">
            <p>Contact Us</p>
          </Route>
          <Route path="/gifts">
            <p>Gifts</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
