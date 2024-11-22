

import React , {useContext} from 'react'
import { AuthContext } from '../context/authContext/authContext';
import { Outlet ,Navigate } from 'react-router-dom';

function PrivateRoute({component:Component , ...rest}) {

    const {user} = useContext(AuthContext);
  return user ? <Outlet Component /> : <Navigate to='/welcome' />   
}

export default PrivateRoute
