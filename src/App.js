import React from "react";
import { Navbar, Nav, NavDropdown, Container, Table } from "react-bootstrap";
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
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Nav.Link as={Link} to="/contact-us">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/registry">
                Registry
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <h1>Sasha and Jeremiah til Death</h1>
                <h3>
                  Ceremony at <strong>4:30 PM</strong> on October 31st, 2020
                </h3>
                <img
                  src={`${process.env.PUBLIC_URL}/invitation--cropped.png`}
                  alt=""
                />
              </header>
            </Route>
            <Route path="/our-story">
              <h1>Our Story</h1>
              <p>
                Growing up in opposite corners of the U.S. west coast, Sasha and
                Jeremiah first met in sunny Santa Monica, CA.
              </p>
              <p>...more to come!</p>
            </Route>
            <Route path="/itinerary">
              <h1>Itinerary</h1>
              <p>Our day together 🏁</p>
              <Table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Guests arrive</td>
                  </tr>
                  <tr>
                    <td>4:30 PM</td>
                    <td>Ceremony</td>
                  </tr>
                  <tr>
                    <td>5:00 PM</td>
                    <td>Family Photos</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Bride + Groom Photos (off-site)</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Dinner, drinks, activities</td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>Bride + Groom Return</td>
                  </tr>
                  <tr>
                    <td>7:00 PM</td>
                    <td>Toasts</td>
                  </tr>
                  <tr>
                    <td>7:30 PM</td>
                    <td>Cake, coffee, tea</td>
                  </tr>
                </tbody>
              </Table>
            </Route>
            <Route path="/dress-code">
              <h1>Dress Code</h1>
              <p>
                We&apos;re so happy you're able to join us to celebrate our
                hallowedding!
              </p>
              <p>
                We&apos;d be thrilled if you were to go dress to impress in a
                classy costume on our special day. If that&apos;s not quite your
                style, then cocktail attire will definitely get the job done. We
                know you&apos;re gonna look great either way.
              </p>
            </Route>
            <Route path="/menu">
              <h1>Menu</h1>
              <h3>Drinks</h3>
              <ul>
                <li>Red + White Wine</li>
                <li>Craft Beer</li>
                <li>Beluga Vodka</li>
                <li>Specialty Mixed Cocktail</li>
                <li>Assorted Sodas</li>
                <li>Water</li>
              </ul>
              <h3>Appetizers</h3>
              <ul>
                <li>Caesar Salad</li>
                <li>
                  Antipasto Platter - Selection of Cured Meats, Cheese, Olives
                  and Accompaniments
                </li>
                <li>Selected Filipino Dishes (TBD)</li>
              </ul>
              <h3>Entrees</h3>
              <ul>
                <li>
                  Wood fired pizza by Olive Wood
                  <ul>
                    <li>Margherita</li>
                    <li>Pepperoni</li>
                    <li>Cheese</li>
                    <li>
                      Meat Lovers - Mild Italian Sausage, Pepperoni, Bacon,
                      Homemade Tomato Sauce and Mozzarella
                    </li>
                    <li>
                      Artichoke - Artichoke Hearts, Parmesan, Roasted Red
                      Peppers, Kalamata Olives, Red Onion, Basil, Mozzarella,
                      Basil Pesto
                    </li>
                    <li>
                      Garlic Mushroom Crema - Mozzarella, Shaved Parmesan, Crema
                    </li>
                    <li>
                      OBG - Caramelized Onions, Crispy Bacon, Fresh Garlic,
                      Basil, Crema
                    </li>
                  </ul>
                </li>
              </ul>
              <h3>Dessert</h3>
              <ul>
                <li>Wedding Cake</li>
                <li>Baklava</li>
              </ul>
            </Route>
            <Route path="/contact-us">
              <h1>Contact Us</h1>
              <p>
                Please e-mail/text Sasha or Jeremiah with any questions leading
                up to the big day! You have our info 👍
              </p>
            </Route>
            <Route path="/registry">
              <h1>Registry</h1>
              <p>
                Your company is more than enough on our special day, but if you
                absolutely must hand us a gift, here are some things we&apos;re
                looking to get for us and the house:
              </p>
              <h3>
                <a href="http://www.etsy.com/registry/Mjk2MDQ2MjZ8NjM1NjM1NDU/">
                  Etsy
                </a>
              </h3>
              <sub>Size S/M for robes, no embroidery</sub>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
