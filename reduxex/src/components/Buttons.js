import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import {arttir,azalt} from "../store/actions/Counter.js";
import {listekle} from  "../store/actions/list.js";


function Buttons(){
const dispatch=useDispatch();
const {counter} = useSelector((state)=>state);
    return(
        <div>
            <button onClick={()=>dispatch(arttir())}>+</button>
            <button onClick={()=>dispatch(azalt())}>-</button>
            <button onClick={()=>dispatch(listekle(counter))}>listeye ekle</button>
        </div>
    )
}

export default Buttons;