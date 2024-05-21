import React ,{useEffect, useState} from 'react'

import { useNavigate} from  'react-router-dom'

function Singup() {

    const [name ,setname]=useState('')
    const [email ,setemail]=useState('')
    const [password ,setpassword]=useState('')
     const Navigate = useNavigate()
     useEffect(()=>{
      const auth = localStorage.getItem('User')
     if(auth){

      Navigate('/')
     }
     })

const submit =async() =>{
   
  if(name && email && password ){

    let result = await fetch('/registation',{
      method:'post',
      body: JSON.stringify({name , email ,password}),
      headers:{
          "Content-Type": "application/json"
      }}
  )
  result = await result.json()
  if(result){
  localStorage.setItem('User', JSON.stringify(result.users))
  localStorage.setItem('token', JSON.stringify(result.auth))
  alert(" user registation")
  Navigate('/')
 }
}else{alert("unvalid user")}}
  


  return (
    <div className='container shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-5'>
        <form>
            <h1 className='text-center'>Registation</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputname1" aria-describedby="namehelp"
    value={name}
    onChange={(e)=>setname (e.target.value)}
    placeholder='Enter your name'
    
    />
    </div>



  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     value={email}
     placeholder='Enter your Email'
     onChange={(e)=>setemail (e.target.value)}/>
    <div id="emailHelp" className="form-text"
    
    >We'll never share your email with anyone else.</div>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" 
    // id="exampleInputPsassword1"
     value={password}
     onChange={(e)=>setpassword (e.target.value)}
     placeholder='Enter your Password'
    
    />
  </div>
 

  <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
</form>
      
    </div>
  )
}

export default Singup
