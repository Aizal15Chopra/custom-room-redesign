"use client"
import React from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'

function CreateNew() {

  const onHandleInputChange=(value, fieldName)=>{
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
          <RoomType/>

          {/* Design type*/}

          {/* Additional requirement text area (optional)*/}

          {/* Button to generate image*/}
        </div>

       </div>
    </div>
  )
}

export default CreateNew
