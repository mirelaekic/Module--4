import React from "react";
import {  Card, Col} from "react-bootstrap";
import './SingleMovie.css';
import ModalForm from "./Modal";
import {withRouter} from "react-router-dom"

class SingleProduct extends React.Component {
  render(props) {
    return (
    <Col lg={2} md={4} xs={12}>
        <div className="wrapper" key={this.props.movie.imdbID}>
        <Card.Img fluid variant="top" src={this.props.movie.Poster} onClick={() => this.props.history.push("/details/" + this.props.movie.imdbID)} className="moviePoster"/>
        <p style={{color: "#fff"}} className="title">{this.props.movie.Title}</p>
        </div>
        <ModalForm
            btn={"add review"}
            method={"POST"}
            data={this.props.movie.imdbID}
            refetchData={() => this.props.refetchData()}
          />
      </Col>
    );
  }
}

export default withRouter(SingleProduct);