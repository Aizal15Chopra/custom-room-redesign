import Image from 'next/image'
import React from 'react'

function ImageSelection() {
  return (
    <div>
        <label>
            Select Image of your room
        </label>
        <div className='mt-3'>
            <label 
                htmlFor = 'upload-image'>
                <div className='p-28 border rounded-xl border-dotted flex justify-center'>
                    <Image src = {'/imageupload.png'} width={50} height={50} alt='image'/>
                </div>
            </label>
            <input type='file' accept = 'image/*' 
            id = 'upload-image' 
            style = {{display: 'none'}}
            
            />
        </div>
    </div>
  )
}

export default ImageSelection