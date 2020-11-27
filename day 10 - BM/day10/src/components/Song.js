import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { withRouter } from 'react-router-dom'

class Song extends React.Component {
  render() {
    let { title, album } = this.props;
    console.log(album)
    console.log(title)
    return (
    <>
    <h4>{title}</h4>
      <Row style={{display:"inline-flex"}}>
        {album.map((album) => (
                <Col lg={2} md={4} xs={12} key={album.id}>
                <Card.Img 
                fluid variant="top" 
                src={album.cover_medium}
                onClick={() => this.props.history.push(`/album/${album.id}`)}/>
              </Col>))}
        </Row>
    </> 
    );
  }
}
export default withRouter(Song);