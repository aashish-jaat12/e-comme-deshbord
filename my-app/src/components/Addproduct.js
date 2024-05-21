import React, { useState } from 'react'

function Addproduct() {
const [name , setname] = useState("")
const [price , setprice] = useState("")
const [category , setcategory] = useState("")
const [company , setcompany] = useState("")
const [error, seterr] = useState(false)

const additem =async ()=>{
if(!name || !price || !category || !company){
  seterr(true)
  return false
}
  const userid = JSON.parse(localStorage.getItem('User'))._id;
  console.log(userid)
  let result = await fetch('/add-product',{
    
    method:'post',
    body: JSON.stringify({name, price , category , company, userid}),
    headers:{
      "Content-Type": "application/json",
      authorization: ` ashish ${JSON.parse(localStorage.getItem('token')) } `
    }
  })
   result = await result.json()
   console.warn(result)

}

  return (
    <div  className='container shadow-lg p-3 mb-5 bg-info rounded margin'>
      <h2 className='text-center '>Add Product</h2>
        <form >
  <div   className="form-group m-3">
     
    <input type="text"   className="form-control" placeholder="Enter product name"
    value={name} 
    onChange={(e)=> setname( e.target.value)}/>
     {error && !name && <span className='m-2 text-danger'> Enter valid name </span>}
  </div>
  <div   className="form-group m-3">
      
    <input type="number"   className="form-control"  placeholder="Enter product price"
    value={price} 
    onChange={(e)=> setprice (e.target.value)}/>
     {error && !price && <span className='m-2 text-danger'> Enter valid price </span>}

  </div>
  <div   className="form-group m-3">
      
    <input type="text"   className="form-control"  placeholder="Enter product category"
    value={category} 
    onChange={(e)=> setcategory (e.target.value)}/>
     {error && !category && <span className='m-2 text-danger'> Enter valid category </span>}

  </div>
  
  <div   className="form-group m-3">
      
    <input type="text"   className="form-control"  placeholder="Enter company name"
    value={company} 
    onChange={(e)=>setcompany (e.target.value)}/>
     {error && !company && <span className='m-2 text-danger'> Enter valid company </span>}

  </div>



  <div   className="form-check m-3">
    <input type="checkbox"   className="form-check-input" id="exampleCheck1"/>
    <label   className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button   onClick={additem}  className="btn btn-primary m-3">Add Product</button>
</form>
    </div>
  )
}

export default Addproduct
