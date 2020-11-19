import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import Books from "../components/romance.json";

class RomanceBooks extends Component {
    render() {
      const OnlyFewBooks = Books.slice(11,17)
        return(
          <Container className="mt-3">
          <h3 className="title mb-5">Romance</h3>
          <Row>
          {OnlyFewBooks.map((BooksDetail) =>(
              <Col lg={2}>
              <Card className="book-card" style={{ width: '10rem' }}>
              <Card.Img variant="top" src={BooksDetail.img} />
              <Card.Title className="cards-title">{BooksDetail.title}</Card.Title>
                <Card.Text>Price ${BooksDetail.price}
                </Card.Text>
              </Card>
              </Col>
          ))}
          </Row>
      </Container>
        )
    }
};

export default RomanceBooks;