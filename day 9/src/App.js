import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MyFooter from "./components/footer";
import Navbar from './components/Navbar';
import Register from "./components/Register"
import { BrowserRouter as Router, Route} from "react-router-dom"


class App extends React.Component{
  render(){
    return (
     <>
     <Router>
     <Navbar/>
     <Route path="/register" component={Register} />
     <Route path="/movies" component={MovieList} />
     <MyFooter/>
     </Router>
     </>
  
    )
  }
}

  export default App;