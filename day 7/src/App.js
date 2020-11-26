import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MyFooter from "./components/footer";
import Navbar from './components/Navbar';
import ShowDetail from "./components/ShowDetail"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SingleProduct from "./components/SingleMovie"

function App() {
  return (
   <>
   <Router>
   <Navbar />
   <Route path="/" render={(props) => <MovieList title="movie"{...props} />}/>
   <Route path="/details/:movie" component={ShowDetail}/>
   <MovieList/> 
   <MyFooter/>
   </Router>
   </>

  )}

  export default App;