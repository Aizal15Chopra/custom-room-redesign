import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function RoomType(selectedRoomType) {
  return (
    <div>
        <label className='text-slate-500'>Select Room Type</label>
        <Select onValueChange={(value) => selectedRoomType(value,'image')}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Room Type" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="living Room">Living Room</SelectItem>
      <SelectItem value="Bedroom">Bedroom</SelectItem>
      <SelectItem value="Kitchen">Kitchen</SelectItem>
      <SelectItem value="Office">Office</SelectItem>
      <SelectItem value="Bathroom">Bathroom</SelectItem>
      <SelectItem value="Dining Room">Dining Room</SelectItem>
    </SelectContent>
  </Select>
  </div>
  )
}

export default RoomType