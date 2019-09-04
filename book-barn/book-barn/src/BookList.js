import React, {Component} from 'react';
import './bookList.css';

class BookList extends Component {

    render() {
        let bookItems = this.props.books.map(book => {
            return (
                <div className="book" key={book.imageLink}>
                        <h3>{book.title}</h3>
                        <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} />
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