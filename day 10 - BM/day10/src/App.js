
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Album from "./components/Album"
import Song from "./components/Song"

class App extends React.Component {
  render() {
    return (
      <>
      <Router>
      <Home/>
      <Navbar/>
      <Route path="/home" exact component={Home}/>
      <Route path="/album/:id" render={(props) => <Album {...props}/>} />
      </Router>
      </>
    )
  }
}

export default App;
