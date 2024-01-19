import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth } from "../../config/firebase/firebase";

import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom'

const Protectedroutes = ({ component }) => {


    const [isuser, setUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true)
            } else {
                navigate('/login')
            }
        })
    }, [])
    return (
        isuser ? component : <h1 className='flex justify-center items-center  h-[100vh]' style={{textAlign:"center", fontSize:"30px"}}>Loading...</h1>)
}

export default Protectedroutes