import React, { Component } from "react";
import Image from './Components/Image'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://cdn.mos.cms.futurecdn.net/oLmBoqiNycCcMVKmB5EkVc.jpg'} />
      </div>
    );
  }
}

export default App;
