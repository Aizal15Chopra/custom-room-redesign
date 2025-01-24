"use client"
import Image from 'next/image'
import React from 'react'

function ImageSelection() {

    const onFileSelected=(event)=>{
        console.log(event.target.files[0])

    }
  return (
    <div>
        <label>
            Select Image of your room
        </label>
        <div className='mt-3'>
            <label 
                htmlFor = 'upload-image'>
                <div className='p-28 border rounded-xl 
                border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg'> 
                    <Image src = {'/imageupload.png'} width={50} height={50} alt='image'/>
                </div>
            </label>
            <input type='file' accept = 'image/*' 
            id = 'upload-image' 
            style = {{display: 'none'}}
            onChange={onFileSelected}
            
            />
        </div>
    </div>
  )
}

export default ImageSelection