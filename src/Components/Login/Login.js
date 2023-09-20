import React from 'react'
import { useState } from 'react'
import "./Login.css"

function Login() {

  const [status,setStatus] = useState({login:true,register:false})
  console.log(status);
  const [signInName,setSignInName] = useState('')
  const [signInPwd,setSignInPwd] = useState('')
  const [signUpDetails, setSignUpDetails] = useState({Username:'',password:'',dob:'',gender:'male'}) 

  const changeDetails = (e) => {
        console.log(e.target)
       setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value}); 

  }

  const changeName = (e) => {
    console.log(e.target.value)
    setSignInName(e.target.value)
  }

  const changePwd = (e) => {
    console.log(e.target.value)
    setSignInPwd(e.target.value)
}

  const renderLoginPage = () => {
    console.log(signInName);
    return (
      <form className='signin-con'>
        <div>
        <label className='label-ele' htmlFor='name'>Username</label>
        <input type='text' className='input-ele' id="name" value={signInName} onChange={changeName} />
        </div> 

        <div>
        <label className='label-ele' htmlFor='pwd'>Password</label>
        <input type='password' className='input-ele' id="pwd" value={signInPwd} onChange={changePwd} />
        </div>
      </form>
    )
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     {status.register && console.log(signUpDetails)}
     {status.login  && console.log(signInName,signInPwd)}
  }
  
  const renderRegisterPage = () => {
    console.log(signUpDetails);
    return (
      <div className="signup-con">
         <div>
          <label className='label-ele' htmlFor='name'>Username</label>
          <input type='text' className='input-ele' name="Username" id="name" value={signUpDetails.username} onChange={changeDetails} />
        </div> 
        <div>
          <label className='label-ele' htmlFor="name">Password</label>
          <input type='password' className='input-ele' name="password" id="pwd" value={signUpDetails.password} onChange={changeDetails} 
          />
        </div>
        <div>
          <input type="date" className='date-obj' name="dob" value={signUpDetails.dob} onChange={changeDetails} /> 
        </div>
        <div>
          <label className='label-ele'> Gender </label>
          <select name="gender" id="gender" onChange={changeDetails}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    )
  }
  return (
    <div className='login-con'>
    <div className="container">
       <div className="row">
          <div className='col-12'>
              <div>
                <button className='btn btn-outline-primary' onClick={() => setStatus({login:false,register:true})}>Sign up</button>
                <button className='btn btn-outline-primary' onClick={() => setStatus({login:true,register:false})}>Sign in</button>
              </div>
              {status.login && renderLoginPage()}
              {status.register && renderRegisterPage()} 
              <div>
                <button className='btn btn-primary' type="submit" onClick={handleSubmit}>submit</button>
              </div>
          </div>   
       </div>
    </div>
    </div>
  )
}

export default Login
