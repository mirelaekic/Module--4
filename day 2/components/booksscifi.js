import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import Books from "../components/scifi.json";

class ScifiBooks extends Component {
    render() {
      const OnlyFewBooks = Books.slice(15,21)
        return(
          <Container className="mt-3">
          <h3 className="title mb-5">Sci-Fi</h3>
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

export default ScifiBooks;