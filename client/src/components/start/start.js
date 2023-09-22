import React from 'react';
import {useNavigate} from "react-router-dom";
export const Start=()=>
{
    const nav=useNavigate();
    const Home=()=>
    {
        nav('/home')
    }
    const About=()=>
    {
        nav('/about')
    }
    const Contact=()=>
    {
        nav('/contact')
    
    }
    const Profile=()=>
    {
        nav('/profile')
    }
    return(
        <>
         < font onClick={Home}>Home</font>
        </>
    )
}