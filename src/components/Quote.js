import React from 'react';

const apiURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en' 

const Quote = ({quote, author}) => {
return(
<div className="text-box">
    <p id='text'>"{quote}"</p>
    <p id='author'>-{author}</p>
</div>
)
}

export default Quote