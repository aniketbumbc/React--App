//UI comopnent made by function only UI purpose no state and class
//other container componet which has state and class ( app.  js)

import React from 'react';
const  Ninjas = (props)=>{ 
        const ninjas = props.ninjas;
        const ninjasList = ninjas.map(ninja=>{
            if(ninja.Age > 30){
            return (
            <div className="ninjas" key={ninja.id}> 
            <div>Name: {ninja.Name}</div>
            <div>Age:{ninja.Age}</div>
            <div>Color:{ninja.Color} </div> 
            </div>
            )
            }else{
                return null;
            }
        })
        return(
            <div>
                {ninjasList}
            </div>        
        ) 

}

export default Ninjas