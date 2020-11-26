import React from "react";
import { Row, Col, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
// In the SingleDish component insert an if/else statement, checking the 
//existence of the dish prop and rendering an error
//message when not present.
class SingleDish extends React.Component{
  state= {}

  render(){
    return(
      <>
    <Row>
      {!this.props.dish ? (<h1>ERROR</h1>) : (
      <Col md={8} className="ml-auto mr-auto">
        <Row>
          <Col md={4}>
            <Link to={"/details/" + this.props.dish.id}>
              <Image
                src={this.props.dish.image}
                className="my-2 w-100 h-auto"
              />
            </Link>
          </Col>
          <Col md={8} className="mt-auto mb-auto">
            <h4>
              {this.props.dish.name}
              <Badge variant="warning" className="ml-2">{this.props.dish.price}</Badge>
              <Badge variant="danger">{this.props.dish.label}</Badge>
            </h4>
            {this.props.dish.description}
          </Col>
        </Row>
      </Col>
      )}
    </Row>
  </>
    )
  }
}

export default SingleDish;