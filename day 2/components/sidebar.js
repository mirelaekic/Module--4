import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Breadcrumb } from "react-bootstrap";
import "../components/latestRelease.css"
function BookBreadcrumb() {
  return (
    <>
    <Container className="sticky-top">
      <Breadcrumb className="myBreadcrumb "> 
        <Breadcrumb.Item href="#">Fantasy</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          History
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Romance</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Sci-Fi</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Horror</Breadcrumb.Item>
      </Breadcrumb>
      </Container>
    </>
  );
}

export default BookBreadcrumb;
