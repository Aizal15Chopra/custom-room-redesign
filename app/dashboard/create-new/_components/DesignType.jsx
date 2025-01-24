import Image from 'next/image'
import React, { useState } from 'react'

function DesignType() {
    const Designs = [
        {
            name: 'Modern',
            image: '/modern.png'
        },
        {
            name: 'Industrial',
            image: '/industrial.png'
        },
        {
            name: 'Traditional',
            image: '/traditional.png'
        },
        {
            name: 'Minimalistic',
            image: '/minimalistic.png'
        },
        {
            name: 'Rustic',
            image: '/rustic.png'
        },
        {
            name: 'Bohemian',
            image: '/bohemian.png'
        }

    ]

    const [selectedOption, setSelectedOption] = useState();
  return (
    <div className='mt-4'>
        <label className='text-gray-600'>Select Interior Design Type</label>
        <div className='mt -3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
            {Designs.map((design, index)=>(
                <div key={index} onClick={()=> setSelectedOption(design.name)}>
                    <Image src={design.image} width = {200} height = {200} alt='image'
                    className={`rounded-md hover:scale-105 transition-all 
                    cursor-pointer ${design.name == selectedOption&&'border-2 border-primary rounded-md p-1'}`}/>
                    <h2>{design.name}</h2>
                </div>
            ))} 
        </div>

    </div>
  )
}

export default DesignType