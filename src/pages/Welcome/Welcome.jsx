import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        //fontSize:"3rem",
        fontWeight:"bold",
        //color:"white",
        // backgroundColor:"black"
        flexDirection:"column",
        gap:"2rem"
      }}>
      
      <h1>Welcome</h1>
      <div style={{
        gap:1
      }}>
     
      <Link style={{
        marginRight:5
      }}  to='/auth'>Sign up</Link>
      <Link to='/auth'>Sign in</Link>
     
      </div>
      </div>
  )
}

export default Welcome
