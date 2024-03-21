import { useState } from 'react'
import './App.css'
import samosaImg from './assets/download.png'

const App = () => {
 
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  } 

  const buyDouble = () => {
    if(count >= 10) {
      setMultiplier(multiplier * 2); 
      setCount(count - 10); 
    }
  }

  const buyParty = () => { 
    if(count >= 100) {
      setMultiplier(multiplier * 5); 
      setCount(count - 100); 
    }
  }

  const buyFeast = () => { 
    if(count >= 1000) {
      setMultiplier(multiplier * 10); 
      setCount(count - 1000); 
    }
  }

  return (
    <>
    <div className='App'>
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2> You have {count} samosas </h2>
        <h3> And get <i>{multiplier} samosas per click</i>!</h3>
        <p> Purchase upgrades below for boost</p>
        <img className='samosa' src={samosaImg} alt='Single Samosa Img' onClick={updateCount}></img>
      </div>
      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️</h3>
          <p><i>2x per click</i></p>
          <button onClick={buyDouble}> 10 samosas </button>
        </div>
        <div className='upgrade'>
          <h3>Party Pack 🎉</h3>
          <p><i>5x per click</i></p>
          <button onClick={buyParty}> 100 samosas </button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p><i>10x per click</i></p>
          <button onClick={buyFeast}> 1000 samosas </button>
        </div>
      </div>
    </div>
    </>
    
  )

}

export default App
