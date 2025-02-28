import React from 'react'

   const C3 = () => {
  return (
    <div>C3  
        <C4 name="deepak" address="new delhi"/>
    </div>
  )
}
export default  C3;

export const C4 =(props)=>
{
    return(
        
        <b> {props.name}  <br/>
        Your address is {props.address} </b>
        
    )
}
