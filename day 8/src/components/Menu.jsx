import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container } from "react-bootstrap";

const Menu = () => (
  <Container>
    {(dishes.length > 1) ? dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />) : <h1>Work in progress...</h1>}
  </Container>
);
export default Menu;
