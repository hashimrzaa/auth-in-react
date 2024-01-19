import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../../config/firebase/firebase";


const Login = () => {
  const navigate = useNavigate()
  const email = useRef('')
  const password = useRef('')
  const [load, setload] = useState(false)


  function submit(e) {
    setload(!load)

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        home()

      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.code,
        });
      });
  }

  function signup() {
    navigate('/signup')
  }

  function home() {
    navigate('/')
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam a corporis sequi deserunt, placeat similique assumenda hic, reiciendis quod porro cum quaerat inventore enim consectetur? Neque quae nihil cum ad?</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={(e) => {
              e.preventDefault()
              submit(e)
            }}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" ref={email} placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" ref={password} autoComplete='on' className="input input-bordered" required />
                <div className='flex justify-between'>
                  <label className="label">
                    <span className="label-text-alt link link-hover text-blue-500" onClick={() => {
                      Swal.fire({
                        title: "No avalaible",
                        icon: "warning"
                      });
                    }} >Forgot password?</span>
                  </label>
                  <label className="label">
                    <span className="label-text-alt cursor-pointer" onClick={signup}>Create account</span>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">{load ? <span className="text-white loading loading-spinner "></span> : 'Login'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login