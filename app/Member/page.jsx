import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

const Memeber = async () => {
  const session  = await getServerSession(options)
  console.log(session)
  
  if(!session) redirect("api/auth/signin?callbackUrl=/Member")
  return (
    <>
        It&apos;s a user based page coming from server 
        {session && <p>{session?.user?.email}</p>}
        {session && <p>{session?.user?.role}</p>}
    </>
  )
}

export default Memeber
