import React from "react";
import { Container, Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import "../components/latestRelease.css"

class AddComment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        comment: {
            rate: "1",
            name: "",
            comment: "",
            elementId: this.props.id
        },
        errMessage: "",
        loading:false,
        succMessage:"",
    }
}

updateComment = (e) => {
    let comment = {...this.state.comment }
    let eachId = e.currentTarget.id

    comment[eachId] = e.currentTarget.value

    this.setState({comment: comment})
}

submitComment = async(e) => {
    e.preventDefault();
    this.setState({ loading: true })
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", 
        {
            method: "POST",
            body: JSON.stringify(this.state.comment),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGI3MDk4MzViMDAwMTc1ODRmMzkiLCJpYXQiOjE2MDU3OTg3NjgsImV4cCI6MTYwNzAwODM2OH0.rp8ljPw0rthUFaUxo1I-Adty2B2zvvGyi-FIJ-lrkBA"
            })
        })
        if(response.ok) {
            alert("Thank you for your review!")
            this.setState({
                comment: {
                    rate: "1",
                    name: "",
                    comment: "",
                    elementId:""
                },
                errMessage: "",
                loading: false,
                succMessage:"",
            })
        } else {
            console.log("error")
            let error = await response.json()
            this.setState({
                errMessage: error.message,
                loading: false
            })
        }
    } catch (e) {
        console.log(e)
        this.setState({
            errMessage: e.message,
            loading: false,
        })
    }
}
render(props) {
    return (
        <div>
        <Container>
            <Form className="title mb-5 bg-info p-5" onSubmit={this.submitComment}>
            <h3 className="mb-4">Add your review</h3>
                <Row>
                    <Col md={3}>
        
                        <Form.Group>
                            <Form.Label htmlFor="rate">Rate</Form.Label>
                                <Form.Control
                                as="select"
                                name="rate"
                                id="rate"
                                value={this.state.comment.rate}
                                onChange={this.updateComment}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                    </Col>
                    <Col md={4}>
                            <Form.Group>
                                <Form.Label htmlFor="elementId"><Form.Control
                                    type="text"
                                    name="elementId"
                                    id="elementId"
                                    placeholder="ID"
                                    required
                                    value={this.state.comment.elementId}
                                    onChange={this.updateComment}
                                /></Form.Label>
                                
                            </Form.Group>
                        </Col>
                        <Col md={7}>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    value={this.state.comment.name}
                                    onChange={this.updateComment}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={7}>
                            <Form.Group>
                                <Form.Label htmlFor="comment">Add your review</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="comment"
                                    id="comment"
                                    placeholder="Review"
                                    required
                                    value={this.state.comment.comment}
                                    onChange={this.updateComment}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="light" type="submit">Add review</Button>
        {
                this.state.succMessage && (
                    <Alert variant = "success">
                        Thank you for your review!
                        {this.state.succMessage} 
                    </Alert>
                )
            }
            {
                this.state.errMessage && (
                    <Alert variant = "danger">
                        Please add all fields! 
                        {this.state.errMessage}
                    </Alert>
                )
            }
            {
                this.state.loading && (
                    <div className=" justify-content-center mt-2">
                            Adding your review...
                            <div className="ml-4 mt-3">
                                <Spinner animation="border" variant="danger" />
                            </div>
                        </div>
                )
            }
            </Form>
        </Container>
        </div>
        )
    }
}

export default AddComment