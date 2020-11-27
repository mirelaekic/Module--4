import React from 'react'
import { Col, Form, Row, Button} from 'react-bootstrap'

 class CommentForm extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            comment: {
                comment: "",
                rate: 1,
                elementId: this.props.id,
            },  
        }
    }
     
     updateCommentField = (e) => {
        
        let comment = { ...this.state.comment } 
        let currentId = e.currentTarget.id 
        comment[currentId] = e.currentTarget.value
        this.setState({ comment: comment })     
     }

     submitComment = async (e) => {
         e.preventDefault();
         try {
             let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
                 {
                     method: 'POST',
                     body: JSON.stringify(this.state.comment),
                     headers: new Headers
                         ({
                         "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI3OTg1Yzk4MzViMDAwMTc1ODUwNGUiLCJpYXQiOjE2MDU4Njc2MTIsImV4cCI6MTYwNzA3NzIxMn0.U6mxgBFpYT7skg3ZUkt222yuYfZdPD1e_0OV27UXk0c"
                        })
                 })
             if (response.ok) {
                 alert('Comment added!')
                 this.setState({
                    comment: {
                        elementId: '',
                        rate: 1,
                        comment: '',
                   }
                 })
             } else {
                 console.log('please check again')
                 console.log(this.state.comment);
             }
         } catch (e) {
             console.log(e)
         }
     }
     render(props) {
        return (
            <Form onSubmit={this.submitComment}>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label htmlFor="rate">
                                Rate
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="rate"
                                id="rate"
                                value={this.state.comment.rate}
                                onChange={this.updateCommentField}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <Form.Group>
                            <Form.Label htmlFor="comment">
                                Comment
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="comment"
                                id="comment"
                                placeholder="Your comment" 
                                required
                                value={this.state.comment.comment}
                                onChange={this.updateCommentField}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}
export default CommentForm