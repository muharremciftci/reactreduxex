import React from "react";
import {useSelector} from "react-redux";

function Counter(){

    const {counter,list} = useSelector(state=>state);
    
    return(
       
       <React.Fragment>
     <h1>{counter}</h1>
     <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
   
     </ul>
       </React.Fragment>
   
       
    )
}

export default Counter;
