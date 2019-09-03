import React,{Component} from 'react';
import BookList from './BookList';

class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      books: []
    }

    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      
      this.setState({
        books: books
      })
    })
  }

  render() {
    return (
      <div>
        <BookList books = {this.state.books} />
      </div>
    )
  }

}

export default App;
