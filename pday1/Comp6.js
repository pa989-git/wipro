// function Comp6(){
    //     return(
    //         <> Hello </>
    //     )
    // }
    
    
    // const Comp6 = ()=>
    // {
    //     return(
    //         <h1> Hello </h1> 
    //     )
    // }
    
    // rfc > which generates function component
    // rafc > which generates arrow function component
    // rcc > which generates class component
    import React, { Component } from 'react'
    
    export default class Comp6 extends Component {
      render() {
        return (
          <div>Comp6</div>
        )
      }
    }
    
    import React from 'react'
    
    export const Comp6 = () => {
      return (
        <div>Comp6</div>
      )
    }
    
    import React from 'react'
    
    export default function Comp6() {
      return (
        <div>Comp6</div>
      )
    }
    
    
    
    