import React from "react";
import SingleProduct from "./SingleMovie";
import { Container, Card } from "react-bootstrap";

class ShowDetail extends React.Component {
    state = {
        movie: null
    }

    componentDidMount() {
        let searchbarMovies = this.props.match.params.movie // pass the props to App
        let loadMovies = SingleProduct.find(movie => movie.imdbID.toString() === searchbarMovies);
        this.setState({movie: loadMovies})
    }

    render(props) {
        return (
            <Container>
                {this.state.movie &&
                <div>
                    <Card>
                        <Card.Img src={"/" + this.state.movie.Poster} />
                        <Card.Body>
                        <Card.Title>{this.state.movie.Title} {this.state.movie.Year}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>}
            {!this.state.movie && <h3>loading...</h3>}
            </Container>
        )
    }
}

export default ShowDetail;