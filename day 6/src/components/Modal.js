import React from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";
import AddComment from "./comment";

class ModalForm extends React.Component {
  state = {
    show: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.data.asin,
        {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGI3MDk4MzViMDAwMTc1ODRmMzkiLCJpYXQiOjE2MDU3OTg3NjgsImV4cCI6MTYwNzAwODM2OH0.rp8ljPw0rthUFaUxo1I-Adty2B2zvvGyi-FIJ-lrkBA",
          }),
        }
      );
      if (response.ok) {
        let results = await response.json();
        console.log(results);
        this.setState({ BookComments: results });
      } else {
        console.log("an error happened!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const BookComments = this.state.BookComments;
    return (
      <>
        <Button
          variant="info"
          onClick={() => this.setState({ show: true })}
          className="button-modal"
        >
          +
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddComment id={this.props.data.asin} />
            <ListGroup>
              {BookComments ? (
                <ListGroup.Item>{BookComments.comment}</ListGroup.Item>
              ) : (
                <p>No comments</p>
              )}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalForm;
