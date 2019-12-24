import React, { Component } from 'react';

class Addninjas extends Component {

state = {
    Name:null,
    Age:null,
    Color:null
}

handleChange =(e)=>{
    this.setState({
        [e.target.id] : e.target.value
    })

}
handleSubmit = (e)=>{
    e.preventDefault();
    this.props.addNinjas(this.state);
}


render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"> Name:  </label>
                <input type ="text" id="Name" onChange={this.handleChange}/>

                <label htmlFor="age"> Age:  </label>
                <input type ="text" id="Age" onChange={this.handleChange}/>

                <label htmlFor="color"> Color:  </label>
                <input type ="text" id="Color" onChange={this.handleChange}/>
                <br/>
                <br/>
                <br/>

                <button>Submit</button>
            </form>

        </div>

    )

}



}
export default Addninjas;