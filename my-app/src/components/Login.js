import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate} from  'react-router-dom'


function Login() {
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const Navigate = useNavigate()

useEffect(()=>{
    const auth = localStorage.getItem('User')
   if(auth){

    Navigate('/')
   }
   })
const Login =async ()=>{
   
let result = await fetch('/login',{
method:'post',
body: JSON.stringify({email, password}),
headers:{
    "Content-Type": "application/json"
}

});

result = await result.json();
if(result.auth){
                  localStorage.setItem("User", JSON.stringify(result.users))
                  localStorage.setItem("token", JSON.stringify(result.auth))
                  Navigate("/")
         }else{
            alert("please enter write details")
         }






// const user = { email ,password} 
// if( email && password && password ){
      
// axios
//     .post("/login" , user)
//     .then((res) =>{ alert(res.data.message) 
//         Navigate("/Products")
      
//      if(res.data.user.name){
//               localStorage.setItem("User", JSON.stringify(user))
//               Navigate("/Products")
//      }else{
//         alert("please enter connect details")
//      }
//      })
     

//   }else{alert("please enter connect details")}






}
  return (
    <div className='container shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-5'>
    <form>
        <h1 className='text-center'>Log-in</h1>



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


<button type="button" onClick={Login} className="btn btn-primary">Submit</button>
</form>
  
</div>
  )
}

export default Login
