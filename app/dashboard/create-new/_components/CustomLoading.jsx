import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  

function CustomLoading({loading}) {
  return (
    <AlertDialog open={loading} className = 'bg-gray-50'>
        <AlertDialogContent>
            <div className="bg-gray-50 flex flex-col items-center">
                <Image src = {'/loading.gif'} alt = 'loading'
                width={100}
                height={100}/>
            </div>
        </AlertDialogContent>
    </AlertDialog>

  )
}

export default CustomLoading