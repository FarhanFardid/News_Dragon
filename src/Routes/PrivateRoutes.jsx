import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const location  = useLocation();
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return   <Spinner animation="border" role="status">
        <span className="visually-hidden m-5 p-5">Loading...</span>
      </Spinner>
    }
    if(user){
        return children;
    }
    else{
        return <Navigate to='/auth/login' state={{from:location}} replace></Navigate>
    }
    
   
};

export default PrivateRoutes;