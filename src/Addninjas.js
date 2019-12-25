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
    this.mainInput.value = "";
    this.mainName.value = "";
    this.mainAge.value = "";
}

render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit} >
                <label htmlFor="name"> Name:  </label>
                <input  ref={(ref) => this.mainName= ref}                
                type ="text" id="Name" onChange={this.handleChange}/>

                <label htmlFor="age"> Age:  </label>
                <input ref={(ref) => this.mainAge= ref} 
                type ="text" id="Age" onChange={this.handleChange}/>

                <label htmlFor="color"> Color:  </label>
                <input ref={(ref) => this.mainInput= ref} 
                 type ="text" id="Color" onChange={this.handleChange}/>
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