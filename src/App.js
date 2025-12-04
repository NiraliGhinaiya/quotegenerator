import { useState } from "react";
import quotes from "./Components/Quotedata";
import "./App.css";

function App(){
  const [quote,setQuote] = useState("Click the button to generate a quote!")

  const generatequote=()=>{
    const randomIndex=Math.floor(Math.random()*quotes.length)
    setQuote(quotes[randomIndex])
  }

  return(<>
    <div className="container">
      <h1 className="title">Generate Quote</h1>
      <p className="quote-box">{quote}</p>
      <button className="btn" onClick={generatequote}>Generate Quote</button>
    </div>
  </>
  )
}

export default App