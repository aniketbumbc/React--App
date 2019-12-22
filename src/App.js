import React, { Component } from 'react';
import Ninjas from './Ninjas';




class App extends Component{
  render(){
  return(
    <div className="App">
    <h1>First React Project</h1>
    <p>Welcome To react world</p>
    <Ninjas/>
    </div>
  );
}
}

export default App;
