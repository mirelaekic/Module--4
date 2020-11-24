import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import Books from "../data/history.json";
import ModalForm from "./Modal";
class HistoryBooks extends Component {
  render() {
    const AddBook = Books.slice(2, 5);
    const AddBook1 = Books.slice(7, 10);
    const OnlyFewBooks = AddBook.concat(AddBook1);
    return (
      <Container className="mt-4">
        <h3 className="title mb-5">History</h3>
        <Row>
          {OnlyFewBooks.map((BooksDetail) => (
            <Col lg={2} key={BooksDetail.asin}>
              <Card
                className="book-card"
                style={{ width: "10rem" }}
                key={BooksDetail.asin}
              >
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

export default HistoryBooks;
