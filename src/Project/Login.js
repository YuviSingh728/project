import React from 'react'
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate();


const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
 
const onemailChange = (e) => {
  setEmail(e.target.value)
}

const onpasswordChange = (e) => {
  setPassword(e.target.value)
}

const onsubmitForm = (e) =>{
  const newEntry = {email:email,password:password};
  // setNewEntry([...allNewEntry,newEntry]);
  console.log();

  setEmail("");
  setPassword("");
  navigate("/")
  
}
  return (
    <div>
      <section class="vh-80 gradient-custom">
  <div class="container py-3 h-80">
    <div class="row d-flex justify-content-center align-items-center h-80">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style={{borderRadius: "1rem", Height: "70vh;"}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-2 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="text" placeholder='Email or username' value={email} onChange={onemailChange} id="typeEmailX" class="form-control form-control-lg" />
                {/* <label class="form-label" for="typeEmailX">Email or username</label> */}
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password"  placeholder='Password' value={password}  onChange={onpasswordChange} id="typePasswordX" class="form-control form-control-lg" />
                {/* <label class="form-label" for="typePasswordX">Password</label> */}
              </div>

              <p class="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5"  onClick={onsubmitForm} type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fa fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fa fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fa fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <Link to="/register" class="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  {/* <div>
  {allNewEntry.map((ele) =>{
  return(
    <div>
    <p>{ele.email}</p>
    <p>{ele.password}</p>
    </div>
  )

})}
  </div> */}

    </div>
  )
}

export default Login