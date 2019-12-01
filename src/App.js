import React, { Component } from 'react';
import Quote from './components/Quote';
import axios from 'axios';
import './App.css';
import Kanye from './img/kanye_head.png';

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

  

   tweetURL = 'https://twitter.com/intent/tweet?hashtags=kanyequotes&related=freecodecamp&text=' + this.state.quote;
  
  render() {
    return(
      <div className="quote-box">
      <div className='header'>Yeezy Said What?!?!?</div>
      <img 
      src={Kanye}
      onClick={this.newQuote}
      />
      <p id='clickme'><em>Click me to hear the GREATEST QUOTE OF ALL TIME!!!</em></p>
      <Quote
      quote={this.state.quote}
      author={this.state.author}
      />
      {/* <button onClick={this.newQuote}>New Quote</button> */}
      <div className='bird-box'>
        <p id='me'>Peter Ngo-Ly, 2019</p>
      <a href="https://twitter.com/kanyewest?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" id="tweet-quote" title="Kanye West's Twitter" target="_blank"><i className="fab fa-twitter"></i></a>
      </div>
      </div>
    )
  }
  
}

export default App;
