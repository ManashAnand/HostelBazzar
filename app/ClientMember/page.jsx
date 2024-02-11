"use client";
import React from 'react'
import {useSession} from 'next-auth/react'
import { redirect } from 'next/navigation';

const ClientMember =  () => {
  const {data:session} = useSession({
    required:true,
    onUnauthenticated(){
      redirect("/api/auth/signin?callbackUrl=/ClientMember")
    }
  })
  return (
    <>
     A client member page 
     
     {session && <p>{session?.user?.email}</p>}
        {session && <p>{session?.user?.role}</p>}
    </>
  )
}

export default ClientMember
