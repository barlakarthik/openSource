import React, { Component } from 'react';
import Pulsar from './components/Pulsar';
class App extends Component{
  render(){
    return(
      <Pulsar/>
    )
  }
}
export default App;

import React from "react";
import TimerWithFun from "./components/TimerWithFun";
function App(){
  return(
    <div className = "App">
      <TimerWithFun/>
    </div>
  )
}
export default App;