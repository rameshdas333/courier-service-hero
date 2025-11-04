import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut, signInWithPopup,GoogleAuthProvider  } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle = () =>{
      setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser =>{
            
            setUser(currentUser)
            console.log('user in the auth state change',currentUser)
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
        
        user,
        loading,
        createUser,
        signIn,
        signInGoogle,
        logOut,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;