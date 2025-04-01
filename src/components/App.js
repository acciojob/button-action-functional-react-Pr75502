import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para,setPara]=useState(false)
  const hello = () => {
    setPara(!para)
  }
  return (
    <div id="main">
      <button id="click"
        onClick={hello}>{para ? "hide" : "show"} Paragraph</button>
      {para && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
