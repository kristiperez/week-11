import React, {Component} from 'react';
import '../App.css';

class UpdateBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: title,
            genre: genre,
            publisher: publisher,
            year: year,
            imageurl: imageurl
        }

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
            this.props.history.push("/")
        })

    handleSave = () => {
        //value is in the state
        fetch('http://localhost:3001/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imageurl: this.state.imageurl
    
            })
        })
        .then(() => {
            this.props.history.push("/books")
        })
    }

    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
       this.handleSave()
    }

    render() {
        return <div>
            <input type="text" name="title" value="{title}" onChange={this.handleTextBoxChange} />
            <input type="text" name="genre" value="{genre}" onChange={this.handleTextBoxChange} />
            <input type="text" name="publisher" value="{publisher}" onChange={this.handleTextBoxChange} />
            <input type="text" name="year" value="{year}" onChange={this.handleTextBoxChange} />
            <input type="text" name="imageurl" value="{imageurl}" onChange={this.handleTextBoxChange} />
            <button onClick={this.handleSubmit}>Submit</button>

        </div>
    }

    
}

export default UpdateBook;