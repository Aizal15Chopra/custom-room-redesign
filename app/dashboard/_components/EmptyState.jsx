import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <Image src = {'/placeholder.png'} 
        width = {250} height = {300} alt='image'/>
        <h2 className='font-medium text-lg text-gray-500 p-5'> Create New AI Interior Design for your room</h2>
        <Button className='mt-5'>+ Redesign Room</Button>
    </div>
  )
}

export default EmptyState 