import React from 'react'
import { Formik, useFormik } from 'formik'
import { useState, useEffect } from 'react'

const Todo = () => {
  let list_arr=['p1','p2'];
  useEffect(()=>{
    localStorage.getItem=(data);
  },[])
    const [data, setData] = useState([]);

    
    const initialValues = {
        todo:'',
    }
    const Formik=useFormik({
      initialValues: initialValues,
      onSubmit: handleSubmit,
      })
   
    function handleSubmit(values) {
        list_arr.push=(values.todo);
        setData={list_arr};
        localStorage.setItem=(data);
        
        console.log(data);
        
      }
     

  return (
    <div>
      <list>
        <ol>
        {data.map(()=>{
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
