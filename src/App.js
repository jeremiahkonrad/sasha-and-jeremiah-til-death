import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <span role="img" aria-label="heart-eyes kitty">
              😻
            </span>{" "}
            S + J
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/our-story">
                Our Story
              </Nav.Link>
              <NavDropdown title="Day of" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/itinerary">
                  Itinerary
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dress-code">
                  Dress Code
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/menu">
                  Menu
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/location">
                  Location
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Nav.Link as={Link} to="/contact-us">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/gifts">
                Gifts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <h1>Sasha and Jeremiah til Death</h1>
              <img src={`${process.env.PUBLIC_URL}/invitation--cropped.png`} />
            </header>
          </Route>
          <Route path="/our-story">
            <p>Our Story</p>
          </Route>
          <Route path="/itinerary">
            <p>Itinerary</p>
          </Route>
          <Route path="/dress-code">
            <p>Dress Code</p>
          </Route>
          <Route path="/menu">
            <p>Menu</p>
          </Route>
          <Route path="/location">
            <p>Location</p>
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
