import React from "react";
import ReactDOM from "react-dom";
import {useState, useEffect} from "react";

import './App.css';

function App() {
  const [quote, setQuote] = useState();

  useEffect(()=>{

    async function fetchData() {
      const response = await fetch("https://api.kanye.rest");
      const json = await response.json();
      // console.log(json.quote);
      setQuote(json.quote)
    };
    fetchData();
  },[]);

  return (
    <div className="App">
      <h1>Today's Quotes.</h1>
      <h3>{quote}</h3>
    </div>
  );
}

export default App;
