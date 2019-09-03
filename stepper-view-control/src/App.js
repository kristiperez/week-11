import React,{Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    console.log('increment counter called')

    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrementCounter = () => {
    console.log('decrement counter called')

    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <button className="decButton" onClick={this.decrementCounter}>-</button>
        <h1>{this.state.counter}</h1>
        <button className="incButton" onClick={this.incrementCounter}>+</button>
      </div>
    )
  }

}


export default App;
