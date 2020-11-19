import './App.css';
import MyAlert from "./components/alert"
import MyBadge from './components/MyBadge';
import Booklist from './components/BookList';
import WarningSign from './components/WarningSign.js'; 
import SearchBook from "./components/search"

function App() {
  return (
    <>
      <SearchBook />
      <Booklist />  
      <WarningSign />
      <MyAlert />
      <MyBadge />
      </>
  );
}

export default App;
