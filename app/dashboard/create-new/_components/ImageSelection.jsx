import Image from 'next/image'
import React from 'react'

function ImageSelection() {
  return (
    <div>
        <label>
            Select Image of your room
        </label>
        <div>
            <label 
                htmlFor = 'upload-image'>
                <div>
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