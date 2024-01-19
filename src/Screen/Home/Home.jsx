import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar';
import Swal from 'sweetalert2'

const Home = () => {
  const navigate = useNavigate()

  function login() {
    navigate('/login')
  }
  function todo() {
    navigate('/todo')
  }
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero min-h-screen img " >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Let's Started</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary" onClick={() => {
                Swal.fire({
                  title: "Welcome to Todos✨",
                  showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                  },
                  hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                  }
                });
                todo()
              }}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home