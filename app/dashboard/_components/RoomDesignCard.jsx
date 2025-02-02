import React, { useState } from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


function  RoomDesignCard({room}) {

    // const onClickHandler=()=>{
    // }
  return (
    <div className='shadow-md rounded-md cursor-pointer' onClick={()=>onClickHandler()}>
            <ReactBeforeSliderComponent
        firstImage={{imageUrl: room?.aiImage}}
        secondImage={{imageUrl:room?.orgImage}}
    />
    <div className='text-center font-medium p-4'>
        <h2> 🏡 {room.designType} {room.roomType}</h2>
    </div>
    </div>
  )
}

export default RoomDesignCard