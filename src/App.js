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

  addNinjas = (ninja) =>{
    ninja.id = Math.floor(Math.random() * 100);
    let ninjas =[...this.state.ninjas,ninja]; //copy speread operator,add new ele 
    //not editing state directly outside setstate. 
    //always chage state inside setState.
    this.setState({
      ninjas: ninjas
    })
  }

  render(){
  return(
    <div className="App">
    <h1>First React Project</h1>
    <p>Welcome To react world</p>
    <Ninjas ninjas={this.state.ninjas}/>  <br/>
    <Addninjas addNinjas = {this.addNinjas}/>
    </div>
  );
}
}

export default App;
