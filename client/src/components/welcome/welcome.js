import React from "react";
import {useNavigate} from 'react-router-dom';

export const Welcome=()=>
{
    const nav=useNavigate();
    const Wel=()=>
    {
        nav('/About')
    }
    return(
        <>
        
        <button onClick={Wel}>About</button>
        </>
    )
}
