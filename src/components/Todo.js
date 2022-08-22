import React from 'react'
import { Formik, useFormik } from 'formik'
import { useState, useEffect } from 'react'

const Todo = () => {
  let list_arr=[];
  
  const [data, setData] = useState([]);
  useEffect(()=>{
    if(localStorage.getItem('todo',data).split(',') !== null){
      localStorage.setItem('todo',data)
    }
   
  },[])
   

  
    const initialValues = {
        todo:'',
    }
    const Formik=useFormik({
      initialValues: initialValues,
      onSubmit: handleSubmit,
      })
   
    function handleSubmit(values) {
      if(localStorage.getItem('todo',data).split(',') !== null){
        localStorage.setItem("todo",data);
        list_arr.push(values.todo);
        setData(list_arr)
      }
      
        
       
      
        
        console.log(list_arr);
        
      }
     

  return (
    <div>
      <list>
        <ol>
        {data.map((item)=>{
         return <li>{data}</li>
        })}
          
        </ol>
      </list>
    
    
        <form onSubmit={Formik.handleSubmit}>
            <input 
            type='text'
            name='todo'
            onChange={Formik.handleChange}/>
            
            <button type='submit'>Add</button>
        </form>
      
    </div>
  )
}

export default Todo
