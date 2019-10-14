import React from 'react'

const apiURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en' 

const Quote = ({quote, author}) => {
return(
<div>
    <span id='text'>"{quote}"</span>
    <br/>
    <span id='author'>-{author}</span>
</div>
)
}

export default Quote