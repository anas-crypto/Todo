import React from 'react'

const Products = () => {
    let arr=[
    {name:"P1",price:"1200"},
    {name:"P2",price:"1200"},
    {name:"P3",price:"1200"}];
    console.log(arr);
  return (
  <div>
   <list>
        <ul>
        {arr.map((item)=>{
         return <li>{item.name}</li>
        })}
        </ul>
    </list>
    </div>


   
  )
}

export default Products
