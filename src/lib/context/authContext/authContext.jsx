import { auth } from "../../Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState ,createContext } from "react";



export const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const  [user ,setUser] = useState(null)
    const [loading ,setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    if(loading){
        return <h1>Loading....</h1>
    }
  return(
    <AuthContext.Provider value={{user}}>
    {children}
    </AuthContext.Provider>
  )  
}


export default AuthProvider
