'use client';


import { signIn, useSession } from "next-auth/react";
import {redirect} from "next/navigation";
import React from 'react'

function PrivateRoute({children}) {
    const authData = useSession({
        status:'unauthenticated',
        onUnauthenticated: ()=>{
            console.log("not authenticated");
            signIn('keycloak');
            console.log('after authentication');
        }
    });
    const {status} = authData;
    const isAuthenticated = status === 'authenticated';

    if(status==='loading'||status==='unauthenticated'){
        return <h1>Redirecting you to the page</h1>
    }

  return (
    <>
    
        {children}
   
    </>
  )
}

export default PrivateRoute;