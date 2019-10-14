import React, { Component } from 'react';
import Quote from './components/Quote';
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    quote: '',
    author: ''
  }
  componentDidMount() {
    axios.get('https://api.kanye.rest/')
    .then(res => {
      this.setState({
         quote: res.data.quote,
         author: 'Kanye West'
        });
    })
  }
  newQuote = () => {
    axios.get('https://api.kanye.rest/')
    .then(res => {
      this.setState({
         quote: res.data.quote,
        });
        console.log(this.state)
    })
  }

  

   tweetURL = 'https://twitter.com/intent/tweet?hashtags=kanyequotes&related=freecodecamp&text=' +this.state.quote;
  
  render() {
    return(
      <div className="quote-box">
      <div className='header'>Yeezy Said What?!?!?</div>
      <Quote
      quote={this.state.quote}
      author={this.state.author}
      />
      <button onClick={this.newQuote}>New Quote</button>
      <a href={this.tweetURL} id="tweet-quote" title="Tweet this quote!" target="_blank"><i className="fab fa-twitter"></i></a>
      </div>
    )
  }
  
}

export default App;
