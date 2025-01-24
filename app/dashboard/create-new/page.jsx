import React from 'react'
import ImageSelection from './_components/ImageSelection'

function CreateNew() {
  return (
    <div>
       <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Remodelling</h2>
       <p className='text-center text-lg text-gray-500 mt-2'>
        Transform any room with a click. Select a space, choose a style, as AI instantly reimagines your environment.
       </p>

       <div>
        {/* Image Selection*/}
            <ImageSelection />
        {/* Form Input section*/}

       </div>
    </div>
  )
}

export default CreateNew
