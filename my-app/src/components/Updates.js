import React ,{ useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Updates() {
    const [name , setname] = useState("")
    const [price , setprice] = useState("")
    const [category , setcategory] = useState("")
    const [company , setcompany] = useState("")
   
    const param= useParams()
 

  useEffect(()=>{
    datafillup()
  },[])

const datafillup = async()=>{
let  result = await fetch(`/updatefilup/${param.id}`,{
  headers:{
    authorization: ` ashish ${JSON.parse(localStorage.getItem('token')) } `
  }
})

result = await result.json()
setname(result.name)
setprice(result.price)
setcategory(result.category)
setcompany(result.company)

}
    
    const updates =async ()=>{

   let result = await fetch(`/update/${param.id}`,{
   method:'put',
   body: JSON.stringify({name, price , category , company}),
   headers:{
       "Content-Type": "application/json",
    authorization: ` ashish ${JSON.parse(localStorage.getItem('token')) } `

      }
    })
   result = await result.json()
  //  console.warn(result)
// setname(result.name)
// setprice(result.price)
// setcategory(result.category)
// setcompany(result.company)
      
    }
    
    
      return (
       
        <div  className='container shadow-lg p-3 mb-5 bg-info rounded margin'>
          <h2 className='text-center m-3'>Update Product</h2>
            <form >
      <div   className="form-group m-3">
         
        <input type="text"   className="form-control" placeholder="Enter product name"
        value={name} 
        onChange={(e)=> setname( e.target.value)}/>
         
      </div>
      <div   className="form-group m-3">
          
        <input type="number"   className="form-control"  placeholder="Enter product price"
        value={price} 
        onChange={(e)=> setprice (e.target.value)}/>
  
    
      </div>
      <div   className="form-group m-3">
          
        <input type="text"   className="form-control"  placeholder="Enter product category"
        value={category} 
        onChange={(e)=> setcategory (e.target.value)}/>
     
    
      </div>
      
      <div   className="form-group m-3">
          
        <input type="text"   className="form-control"  placeholder="Enter company name"
        value={company} 
        onChange={(e)=>setcompany (e.target.value)}/>
        
    
      </div>
    
    
    
      <div   className="form-check m-3">
        <input type="checkbox"   className="form-check-input" id="exampleCheck1"/>
        <label   className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button   onClick={updates}  className="btn btn-primary m-3">Update</button>
    </form>
        </div>
      )
    }

export default Updates
