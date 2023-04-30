import React, { createContext, useEffect, useState } from 'react';


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const[loading,setLoading] = useState(true)
    const createUser = (email,password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
       
    }

    const loginUser =(email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
        
    }
 const profileUpdate = (user,name) =>{
   return updateProfile(user, {
        displayName: name,
      })
 }
    const logOut = () =>{
        setLoading(false)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }

    },[])
const authInfo = {user,
    createUser,loginUser,profileUpdate,logOut,loading

}

    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;