import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { changeRange, decrement, increment, reset } from './redux/slice'
import { useState } from 'react'


function App() {
  const dispatch = useDispatch()/* call action */
  const count = useSelector((state)=>state.counter.value)
  console.log(count);
  
  const[range , setRange] = useState("")
  console.log(range);
  
  

  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:"black",fontFamily:'Times new roman'}} className='d-flex justify-content-center align-items-center '>
  
        <div className='bg-light p-5 rounded' style={{width:'500px'}}>
          <h1 className='text-info text-center'>Counter Application</h1>
          <h1 className='text-center my-5' style={{fontSize:'70px'}}>{count}</h1>
          <div className='d-flex justify-content-evenly'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning' >Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger' >Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success' >Increment</button>

          </div>
          <div className='d-flex mt-5'>
            <input type="text" className='form-control' placeholder='Enter the range' onChange={(e)=>setRange(e.target.value)} />
            <button className='btn btn-primary ms-3 o' onClick={()=>dispatch(changeRange(Number(range)))}>Click</button>

          </div>
          


        </div>
        
      
    </div>
  

     
    </>
  )
}

export default App
