import React, { Component } from 'react';
class Ninjas extends Component{
    render(){
       
        const ninjas = this.props.ninjas;

        console.log("log here", ninjas);



        const ninjasList = ninjas.map(ninja=>{
            return (
            <div className="ninjas" key={ninja.id}> 
            <div>Name: {ninja.Name}</div>
            <div>Age:{ninja.Age}</div>
            <div>Color:{ninja.Color} </div> 
            </div>
            )
        })
        return(
            <div>
                {ninjasList}
            </div>
   
           
        ) 
    }
}

export default Ninjas