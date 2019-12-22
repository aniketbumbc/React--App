import React, { Component } from 'react';
class Ninjas extends Component{
    render(){
        console.log(this.props);
        const {Name,Age,Color} = this.props;
        return(
            <div className="ninjas">
    <div>Name: {Name}</div>
        <div>Age:{Age}</div>
            <div>Color:{Color}</div>
            </div>
        ) 
    }
}

export default Ninjas