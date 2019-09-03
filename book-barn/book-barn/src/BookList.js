import React, {Component} from 'react';


class BookList extends Component {

    render() {
        let bookItems = this.props.books.map(book => {
            return (
            <div key={book.imageLink}>
                        <h3>{book.title}</h3>
                        <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} />
                    </div>
            )
        })

        return <div>{bookItems}</div>
    }
}

export default BookList