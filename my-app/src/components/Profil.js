import React, { useEffect, useState } from 'react'

function Profil() {

 const[names ,setauthe] = useState()
 const[email ,setemail] = useState()

useEffect(()=>{
  profile()
})

const profile = async()=>{

// let data = await fetch("/profile",{
//   headers:{
//     authorization: ` ashish ${JSON.parse(localStorage.getItem('token')) } `
//   }
// })
  //  data = await  data.json()
   const auth = JSON.parse(localStorage.getItem('User'))
   
   setauthe(auth.name)
   setemail(auth.email)
   
  //  })
   
  
   
   
   
} 




  return (
    <div  className='container shadow-lg p-3 mb-5 bg-info  margin '>
       <div className='user'>
        <img src="user.png" alt="usre" />
        <h1>{names}</h1>
       
       </div>
       <div className='email'>   <h3>{email}</h3></div>
     
    </div>
  )
}

export default Profil
