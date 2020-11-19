import React, { Component } from "react";
import BookList from "./BookList";
import { Form, Button } from "react-bootstrap";

class SearchBook extends Component {
  state = {
    books: romance,
  };
  searchBooks = (query) => {
    query.preventDefault();
    if (query) {
        let filteredBooks = this.state.books.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
        this.setState({ books: filteredBooks });
    } else {
        this.setState({ books: romance });
    }
};

    //grab the  inputvalue
    //filter books data
    //setState with filtered books
  }

  render() {
    return;
    <div>
      <Form inline>
        <FormControl onChange={this.handleInput(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
        <Button onClick={(e) => this.searchBooks(e.tagret.value)} variant="outline-success">
          Search
        </Button>
      </Form>

      {/* <Booklist books={this.state.books} /> */}
    </div>;
  }
}

export default SearchBook;
