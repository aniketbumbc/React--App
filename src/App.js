import React, { Component } from 'react';
import Ninjas from './Ninjas';
import Addninjas from './Addninjas';




class App extends Component{
  state ={
    ninjas:[
      {Name: "Yoshi", Age:"28",Color:"Red" ,id:1},
      {Name: "Bunny",Age:"33", Color:"Black",id:2},
      {Name: "Keveee", Age:"58",Color:"Pink",id:3}
    ]
  }
  render(){
  return(
    <div className="App">
    <h1>First React Project</h1>
    <p>Welcome To react world</p>
    <Ninjas ninjas={this.state.ninjas}/>  <br/>
    <Addninjas/>
    </div>
  );
}
}

export default App;
