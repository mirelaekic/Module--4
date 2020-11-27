import React from "react";
import { Container } from "react-bootstrap";
import Song from "./Song"
import "../assets/home.css"

class Home extends React.Component {
  state = {
    albums: [],
    loaded: false,
    rock: [],
    pop: [],
    funk: [],
    allAlbums: [],
  };

  fetchAlbum = () => {
    let url = "https://deezerdevs-deezer.p.rapidapi.com/search/album?q=";
    Promise.all([
      fetch(url + "rock", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "c7518066aemshbf2af81d0def7f4p179c3djsn34a4c1f70d81",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.setState({
            loaded: true,
            rock: json.data,
          });
        }),
      fetch(url + "pop", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "c7518066aemshbf2af81d0def7f4p179c3djsn34a4c1f70d81",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.setState({
            loaded: true,
            pop: json.data,
          });
        }),
      fetch(url + "funk", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "c7518066aemshbf2af81d0def7f4p179c3djsn34a4c1f70d81",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.setState({
            loaded: true,
            funk: json.data,
          });
        }),
    ]).catch((e) => {
      console.log(e);
      this.setState({
        loaded: true,
      });
    });
  };
  componentDidMount = async () => {
    {
      this.fetchAlbum();
    }
  };
  render() {
    let { loaded, rock, pop, funk } = this.state;
    console.log("rock ",rock)
    console.log("pop ",pop)
    console.log("funk ",funk)
    if (!loaded) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <Container>
          <Song
          loaded = {loaded}
          title="Rock"
          album={rock.slice(10,15)}
           />
          <Song
          loaded = {loaded}
          title="POP"
          album={pop.slice(10,15)} />
          <Song
          loaded = {loaded}
          title="Funk"
          album={funk.slice(10,15)} />
        </Container>
      );
    }
  }
}
export default Home;
