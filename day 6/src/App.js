import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookNavbar from "./components/navbar";
import BookJumbotron from "./components/jumbtron";
import FantasyBooks from "./components/booksfantasy";
import RomanceBooks from "./components/booksromance";
import BookBreadcrumb from "./components/sidebar";
import LatestBooks from "./components/latestRelease";
import HorrorBooks from "./components/bookshorror";
import HistoryBooks from "./components/bookshistory";
import ScifiBooks from "./components/booksscifi";


class App extends React.Component {
  render(){
    return(
      <>  
      <BookNavbar/>
      <BookJumbotron/>
      <BookBreadcrumb/>
      <LatestBooks/>
      <FantasyBooks/>
      <RomanceBooks/>
      <HistoryBooks/>
      <ScifiBooks/>
      <HorrorBooks/>
      </>
    );
  }
}

export default App;