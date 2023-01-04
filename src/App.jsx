import { useState } from 'react';
import {Random} from './components/Random';
import './style.css'

function App() {

  // fetch the random quote from an API in the useEffect hook
  // use the setQuote() and setAuthor() function to set the quote and author from the fetched data respectively
  // also pass the useEffect function so the button can use it to generate a random quote on click

  /**
   * store a color in a state variable
   * update the color anytime the button is clicked
  */

  const arrayOfColors = [
    '#dc3545',
    '#212529',
    '#0d6efd',
    '#6c757d',
    '#198754',
    '#ffc107'
  ]
  
  const [color, setColor] = useState(arrayOfColors[1]);

  const changeColor = () => {
    setColor(arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)]);
  }


  return (
    <div className="App" style={{backgroundColor: color}}>
      <Random handleColor={changeColor} color={color} />
      <small style={{color: '#fff', fontWeight: 500}}>Designed by Chidera</small>
    </div>
  )
}

export default App
