import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut  } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser =>{
            
            setUser(currentUser)
            setLoading(false)
        })
       
        return () => {
            unSubscribe()
        }
       
    },[])

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        logOut,
        user,
        signIn,
        loading,
        createUser,
        

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;