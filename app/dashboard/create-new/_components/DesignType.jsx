import React from 'react'

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
  return (
    <div>
        <label className='text bg-gray-500'>Select Interior Design Type</label>
        <div>
            {Designs.map((design, index)=>(
                <div key={index}>
                    <Image src={design.image} alt='image' width = {100} height = {100}/>
                </div>
            ))} 
        </div>

    </div>
  )
}

export default DesignType