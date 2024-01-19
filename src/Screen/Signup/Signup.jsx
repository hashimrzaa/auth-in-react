import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'
import { auth } from "../../config/firebase/firebase";


const Signup = () => {

  const navigate = useNavigate()
  const email = useRef('')
  const password = useRef('')



  function submit(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        login()
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.code,
        });
      });
  }
  function login() {
    navigate('/login')
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam a corporis sequi deserunt, placeat similique assumenda hic, reiciendis quod porro cum quaerat inventore enim consectetur? Neque quae nihil cum ad?</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={async (e) => {
              submit(e)

            }}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text" >Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" ref={email} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" ref={password} placeholder="password" className="input input-bordered" autoComplete='on' required />
                <label className="label">
                  <span className="label-text-alt cursor-pointer text-blue-500" onClick={login}>Already have an Account?</span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit'>Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
