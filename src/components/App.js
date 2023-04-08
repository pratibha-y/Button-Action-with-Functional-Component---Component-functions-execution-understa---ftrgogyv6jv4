import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  // let displayPara = false;
  let [displayPara, setDisplayPara] = useState(false);
  const buttonClicked = ()=>{
    setDisplayPara(!displayPara);
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button onClick={buttonClicked} id="click">Click</button>
      {displayPara ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      : ""}
    </div>
  );
}


export default App;
