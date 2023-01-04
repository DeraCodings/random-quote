import {FaQuoteLeft, FaTumblrSquare, FaTwitterSquare} from 'react-icons/fa'

function Quote(props) {    

    const { text, author, handleIsTrue, color } = props;

    return (
        <div className='quote-box' id='quote-box'>
            <div id="text" className="text">
                <p style={{color: color}}><span><FaQuoteLeft size={35} /> </span>{ text }</p>
            </div>
            <p id='author' style={{color: color}}>{ author }</p>
            <div className="buttons">
                <div className="social-links">
                    <a title='Share On Twitter' href={`https://twitter.com/intent/tweet?hashtags=quote&related=freecodecamp&text=${text}.${author}`} target='_blank' rel='noopener'><FaTwitterSquare color={color} size={ 30 } /></a>
                    <a title='Share On Tumblr' href="" target='_blank'><FaTumblrSquare color={color} size={30} /></a>
                </div>
                <button id="new-quote" onClick={handleIsTrue()} style={{ backgroundColor: color, boxShadow: `0 2px 6px ${color}`}} >New Quote</button>
            </div>
        </div>
    )
}


export default Quote