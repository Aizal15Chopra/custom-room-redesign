"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'

function CreateNew() {

  const [formData, setFormData] = useState([]);
  const onHandleInputChange=(value, fieldName)=>{
    setFormData(prev=>({...prev, [fieldName]:value}))

    console.log(formData); 
  }
  return (
    <div>
       <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Remodelling</h2>
       <p className='text-center text-lg text-gray-500 mt-2'>
        Transform any room with a click! Select a space, choose a style, as AI instantly reimagines your environment.
       </p>

       <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
        {/* Image Selection*/}
            <ImageSelection selectedImage={(value)=> onHandleInputChange(value,'image')}/>
        {/* Form Input section*/}
        <div>
          {/* Room type*/}
          <RoomType selectedRoomType={(value)=> onHandleInputChange(value,'roomType')}/>

          {/* Design type*/}
            <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'DesignType')} />
          {/* Additional requirement text area (optional)*/}
            <AdditionalReq additionalRequirementInput = {(value)=>onHandleInputChange(value,'additionalReq')}/>
          {/* Button to generate image*/}
          <Button className='w-full mt-5'>Generate</Button>
          <p className='text-sm text-gray-500 mb-52'>NOTE: 1 Credit will be used to redesign your room</p>
        </div>

       </div>
    </div>
  )
}

export default CreateNew
