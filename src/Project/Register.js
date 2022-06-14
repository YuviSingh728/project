import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Register = () => {

  const [yourname,setYourName] = useState("");
  const [youremail,setYourEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpassword,setComfirmPassord] = useState("");
   

  const onyournameChange = (e) => {
    setYourName(e.target.value)
  }
  
  const onyouremailChange = (e) => {
    setYourEmail(e.target.value)
  }

  const onpasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onconfirmpasswordChange = (e) => {
    setComfirmPassord(e.target.value)
  }

  const onsubmitForm = (e) =>{
    const newEntry = {yourname:yourname,youremail:youremail,password:password,confirmpassword:confirmpassword};
    // setNewEntry([...allNewEntry,newEntry]);
    console.log();
  
    setYourName("");
    setYourEmail("");
    setPassword("");
    setComfirmPassord("");
    
    
  }

  return (
    <div>
    <div className='div2'>
        <section>
  <div className="mask d-flex align-items-center h-60 gradient-custom-3">
    <div className="container h-60">
      <div className="row d-flex justify-content-center align-items-center h-60">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card bg-dark text-white" style={{height: "95vh", marginTop:"2%" ,borderRadius: "1rem"}}>
            <div className="card-body ">
              <h2 className="text-uppercase text-center mb-5" style={{color:"white"}}>Register</h2>

              <form>

                <div className="form-outline mb-4" style={{width: "80%",marginLeft:"10%"}}>
                  <input type="text" placeholder='Your Name' value={yourname} onChange={onyournameChange} id="form3Example1cg" className="form-control form-control-lg" />
                  {/* <label className="form-label" for="form3Example1cg">Your Name</label> */}
                </div>

                <div className="form-outline mb-4" style={{width: "80%",marginLeft:"10%"}}>
                  <input type="email" placeholder='Your Email' value={youremail} onChange={onyouremailChange} id="form3Example3cg" className="form-control form-control-lg" />
                  {/* <label className="form-label" for="form3Example3cg">Your Email</label> */}
                </div>

                <div className="form-outline mb-4" style={{width: "80%",marginLeft:"10%"}}>
                  <input type="password" placeholder='Password' value={password} onChange={onpasswordChange} id="form3Example4cg" className="form-control form-control-lg" />
                  {/* <label className="form-label" for="form3Example4cg">Password</label> */}
                </div>

                <div className="form-outline mb-4" style={{width: "80%",marginLeft:"10%"}}>
                  <input type="Text" placeholder='Confirm Password'  value={confirmpassword} onChange={onconfirmpasswordChange} id="form3Example4cdg" className="form-control form-control-lg" />
                  {/* <label className="form-label" for="form3Example4cdg">Repeat your password</label> */}
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-4" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" for="form2Example3g" style={{color :"#fff" }}>
                    I agree all statements in <a href="#!" className="text-body text-white-50"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                <Link to="/login">
                  <button type="button"
                    className="btn btn-outline-light btn-lg" onClick={onsubmitForm}>Register</button></Link>
                </div>

                <p className="text-center text-white mt-3 mb-0">Have already an account? <Link to="/login"
                    className="text-white-50 fw-bold"><u>Login here</u></Link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </div>
  )
}

export default Register