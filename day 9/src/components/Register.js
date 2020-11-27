import React from "react";
import {
  Container,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";


export class Register extends React.Component {
  state = {
    register: {
      name: "",
      surname: "",
      email: "",
      password: "",
      yearOfBirth: "",
      streetAddress: "",
      city: "",
      postalCode: "",
    },
    validated:false,
    setValidated:false
  };


  updateRegistration = (event) => {
    let register = { ...this.state.register };
    let registerID = event.currentTarget.id;

    register[registerID] = event.currentTarget.value;
    this.setState({ register: register });
   
    const form = event.currentTarget;
    if (form.checkValidity()=== false){
        event.preventDefault();
        event.stopPropagation(); 
    } else {
        this.setState({validated: true}) 
    }  
  };
  render() {
    return (
      <div>
        <Container style={{padding:"8rem",}}>
        <h4 style={{color:"white"}}>REGISTER OR LOG IN</h4>
          <Form className="text-white mt-5" noValidate validated={this.state.validated} onSubmit={this.updateRegistration}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                  required
                  minLength="2"
                    type="text"
                    placeholder="Enter name"
                    id="name"
                    name="name"
                    value={this.state.register.name}
                    onChange={this.updateRegistration}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                  required
                    type="text"
                    placeholder="Enter surname"
                    id="surname"
                    surname="surname"
                    value={this.state.register.surname}
                    onChange={this.updateRegistration}
                  />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
              required
                type="email"
                placeholder="Enter email"
                id="email"
                email="email"
                value={this.state.register.email}
                onChange={this.updateRegistration}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
              required
              minLength="8"
                type="password"
                placeholder="Password"
                id="password"
                password="password"
                value={this.state.register.password}
                onChange={this.updateRegistration}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Col xs={5}>
                <Form.Label>City</Form.Label>
                <Form.Control
                required
                  placeholder="City"
                  id="city"
                  city="city"
                  value={this.state.register.city}
                  onChange={this.updateRegistration}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Label>Street address</Form.Label>
                <Form.Control
                required
                  placeholder="Street Address"
                  id="streetAddress"
                  streetAddress="streetAddress"
                  value={this.state.register.streetAddress}
                  onChange={this.updateRegistration}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Label>Zip code</Form.Label>
                <Form.Control
                required
                type="number"
                minLength="5"
                  placeholder="Zip"
                  id="postalCode"
                  postalCode="postalCode"
                  value={this.state.register.postalCode}
                  onChange={this.updateRegistration}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Col>
            </Form.Row>
            <Row>
              <Col xs={3}>
                <Form.Group className="mt-3" >
                  <Form.Label>Your birthday</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="Your birthday"
                    id="yearOfBirth"
                    yearOfBirth="yearOfBirth"
                    value={this.state.register.yearOfBirth}
                    onChange={this.updateRegistration}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mt-5">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button className="mt-3 mb-5" variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Register;
