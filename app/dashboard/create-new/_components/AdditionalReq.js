import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq() {
  return (
    <div className='mt-5'>
        <label className='text-gray-500'>Enter Additional Requirements (Optional) </label>
        <Textarea className='h-8'></Textarea>
    </div>
  )
}

export default AdditionalReq 