import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq(additionalRequirementInput) {
  return (
    <div className='mt-5'>
        <label className='text-gray-500'>Enter Additional Requirements (Optional) </label>
        <Textarea className='h-4'onChange = {(e)=>additionalRequirementInput(e.target.value)}/>
    </div>
  )
}

export default AdditionalReq 