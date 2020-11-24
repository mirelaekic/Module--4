import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import Books from "../data/horror.json";
import ModalForm from "./Modal";

class HorrorBooks extends Component {
  render() {
    const OnlyFewBooks = Books.slice(11, 17);
    return (
      <Container className=" mb-5">
        <h3 className="title mb-5">Horror</h3>
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

export default HorrorBooks;
