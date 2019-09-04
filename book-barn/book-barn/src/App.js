import React,{Component} from 'react';
import BookList from './BookList';
import Header from './Header';
import Footer from './Footer';
import './App.css';

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
        <Header />
        <BookList books = {this.state.books} />
        
        <Footer />
      </div>
    )
  }

}

export default App;
