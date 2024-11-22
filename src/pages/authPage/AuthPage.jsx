import React from 'react'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

function AuthPage() {
  return (
    <div 
    className='gradient__bg'
    style={{
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
         height:"100vh",
        
    // fontWeight:"bold",
       
        
    }}>
    
    <div className="container center">
    <div className="row ">
    <div className="col l6 s12">
    
    <Login/>
    
    </div>
    <div className="col l6 s12">
    <div>

    <Register/>
    </div>
    </div>
    </div>
    </div>
    <div>
  
    </div>
   
    </div>
  )
}

export default AuthPage
