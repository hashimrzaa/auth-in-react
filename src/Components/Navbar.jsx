import React from 'react'
import {  getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  

    const firebaseConfig = {
      apiKey: "AIzaSyDNtRGm5OyPM-8Hi0GvOefN2RH81MbBZHg",
      authDomain: "hasho-todos.firebaseapp.com",
      projectId: "hasho-todos",
      storageBucket: "hasho-todos.appspot.com",
      messagingSenderId: "1015319381919",
      appId: "1:1015319381919:web:6e8678af97f93c97479faa",
      measurementId: "G-3MWST6JT8J"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    function signout() {
        signOut(auth).then(() => {
          login()
        }).catch((error) => {
          console.log(error);
        });
      }
    
      function login() {
        navigate('/')
      }
      function home() {
        navigate('/home')
      }
      function todo() {
        navigate('/todo')
      }
    
    return (
        <div className="navbar bg-primary text-primary-content absolute top-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="text-blue-500 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><a onClick={home}>Home</a></li>
                        <li><a onClick={todo}>Todos</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" onClick={home}>Hasho</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[17px]">
                    <li><a onClick={home}>Home</a></li>
                    <li><a onClick={todo}>Todos</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost text-white" onClick={signout}>Signout</a>
                <a className="btn btn-ghost text-white ml-2" onClick={login}>Login</a>
            </div>
        </div>
    )
}

export default Navbar