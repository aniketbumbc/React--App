import React, { Component } from 'react';
import Ninjas from './Ninjas';




class App extends Component{
  render(){
  return(
    <div className="App">
    <h1>First React Project</h1>
    <p>Welcome To react world</p>
    <Ninjas Name= "Bunny" Age="23" Color="Black"/>  <br/>
    <Ninjas Name= "Yoshi" Age="28" Color="Red"/> 
    </div>
  );
}
}

export default App;
