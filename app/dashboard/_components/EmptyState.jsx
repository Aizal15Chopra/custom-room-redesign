import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <Image src = {'/placeholder.png'} 
        width = {300} height = {400} alt='image'/>
        <h2 className='font-medium text-lg text-gray-500 p-5'> Create New AI Interior Design for your room</h2>

        <Link href={'/dashboard/create-new'}>
              <Button className='mt-3'>+ Redesign Room</Button>
        </Link>

    </div>
  )
}

export default EmptyState 