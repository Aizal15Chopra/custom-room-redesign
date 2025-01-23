"use client"
import { useUser } from '@clerk/clerk-react'
import React from 'react'

function Listing() {
  const {user} = useUser(); 
  return (
    <div>
      <h2 className='font-bold text-3xl'> Hello, {user?.fullName} </h2>
    </div>
  )
}

export default Listing