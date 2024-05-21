import React, { useEffect, useState } from 'react'
import{Link} from 'react-router-dom'

function Productlist() {
    const [product , setproduct] = useState([]);
    
    
    
    useEffect(()=>{
        listproduct()
       
    },[])


    const listproduct =async ()=>{
const result =await fetch ("/product",{
  headers:{
    authorization: ` ashish ${JSON.parse(localStorage.getItem('token')) } `
  }
})
   const data = await  result.json()
   setproduct(data)
}



const searchs =async (e)=>{

let key = e.target.value


if(key){
  let results = await fetch(`/searchs/${key}`,{
    headers:{
      authorization: ` ashish ${JSON.parse(localStorage.getItem('token')) } `
    }
    
  })
results = await results.json()
if(results)
{ setproduct(results)}
}else{
  listproduct()
}



}


  return (
    <div className=' m-sm-5 '>
            <h2 className='text-center margin'> Products</h2>
           <div className='witdh'>
            <input class="form-control me-2 m-3 witdhinput " type="text" placeholder="Search Products"
            
            onChange={searchs} />
            </div> 

<table class="table table-success table-striped">
      
       <thead>
    <tr>
      <th scope="col">S.Na</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">category</th>
      <th scope="col">company</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
{
  product.length > 0 ?  product.map((item, index)=>
    <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.category}</td>
      <td>{item.company}</td>
      <td>
      <button><Link to={"/update/"+item._id} >Update</Link></button></td>
    </tr>
   
  </tbody>
  ): <h2 className='text-center'>No Result found</h2>
  }
</table>

      
    </div>
  )
}

export default Productlist
