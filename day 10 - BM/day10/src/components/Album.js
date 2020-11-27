import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";

export default class Album extends Component {
  state = {
    album: {},
  };

  fetchSingleAlbum = async () => {
    let url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
    await fetch(url , {
      method: "GET",
      headers: {    
        "x-rapidapi-key": "c7518066aemshbf2af81d0def7f4p179c3djsn34a4c1f70d81",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ albums: json.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidUpdate() {
    let albumsfromHome = this.props.match.params.id;
    let loadCorrectAlbum = this.state.album.find(
      (data) => data.id.toString() === albumsfromHome
    );
    this.setState({ album: loadCorrectAlbum });
console.log("fetched data",this.state.album)
  }
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} key={this.state.album.id}>
              <Image src={this.state.album.cover_big} />
          <Card.Body>
            <Card.Title>{this.state.album.title}</Card.Title>
        </Card.Body>
        </Card>
      </div>
    );
  }
}
