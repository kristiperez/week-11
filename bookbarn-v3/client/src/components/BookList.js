import React, {Component} from 'react';
import '../bookList.css';
import '../App.css';
import { Button } from 'react-bootstrap';
// import Header from './Header';
// import Footer from './Footer';
// import AddBook from './AddBook';
// import {BrowserRouter, Route,Switch} from 'react-router-dom';
// import {withRouter} from 'react-router-dom'


class BookList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
      
        this.fetchBooks()
    }
      
    fetchBooks = () => {
        fetch('http://localhost:3001/books')
        .then(response => response.json())
        .then(books => {
        
            this.setState({
                books: books
            }, () => {
                console.log('books updated')
            })
        })
    }
     
    deleteBook = (id) => {
        //value is in the state
        fetch('http://localhost:3001/delete-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:id
            })
        }).then(() => {
            this.fetchBooks()
        })
    }

    handleUpdateBook = (bookId) => {
        this.props.history.push(`/update-book/${bookId}`)
    }


    render() {
        let bookItems = this.state.books.map((book, index) => {
            return (
                <div className="book" key={index}>
                        <h3>{book.title}</h3>
                        <img src={book.imageurl} />
                        <div>{book.genre}</div>
                        <div>{book.year}</div>
                        <div>{book.publisher}</div>
                        <Button variant="outline-danger" onClick={() => this.deleteBook(book.id)}>Delete</Button>
                        <Button variant="outline-primary" onClick={() => this.handleUpdateBook(book.id)}>Edit</Button>
                        
                </div>
            )
        })

        return (<div>
                <div className = "booksList">

                    {bookItems}
                </div>
                </div>)
    }
}

export default BookList
