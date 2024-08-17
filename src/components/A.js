import React, { useState } from 'react'

const A = () => {
  const [name, setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
    const forhandler = (e)=>{
        e.preventDefault();
        console.log(name, email, password);
    }
  return (
    <div className='container'>
    <h2 className='text center'>SIGNUP SCREEN</h2>
    <form onSubmit={forhandler}>
    <div className='text center m-auto rounded shadow w-25 p-3 bg-dark' >
    <div className="p-3">
            <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} className="form-control"/>
          </div>
     <div className='p-3'> <input type='email' placeholder='Enter your email' onChange={(e) =>setEmail(e.taarger.value)} className='form-control' /></div>
      <div> <input type='password' placeholder='Enter your password'onChange={(e) =>setPassword(e.target.value)} className='form-control'/></div>
      <button type='submit' className='btn btn-primary'>submit</button>
      </div>
      </form>
    </div>
  )
}

export default A
