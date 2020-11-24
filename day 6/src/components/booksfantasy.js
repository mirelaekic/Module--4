import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Category from "../data/fantasy.json";
import "../components/latestRelease.css";
import ModalForm from "./Modal";

class FantasyBooks extends Component {
  state = {
    books: Category.fantasy,
    filtered: [],
  };
  render() {
    const OnlyFewBooks = this.state.books.slice(14, 20);
    return (
      <Container className="mt-5">
        <h3 className="title mb-5">Fantasy</h3>
        <Row>
          {OnlyFewBooks.map((BooksDetail) => (
            <Col lg={2} key={BooksDetail.asin}>
              <Card className="book-card" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={BooksDetail.img} />
                <Card.Title className="cards-title">
                  {BooksDetail.title}
                </Card.Title>
                <Card.Text>
                  Price ${BooksDetail.price}
                  <ModalForm
                    key={BooksDetail.asin}
                    btn={"add review"}
                    method={"POST"}
                    data={BooksDetail}
                    refetchData={() => this.props.refetchData()}
                  />
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FantasyBooks;
