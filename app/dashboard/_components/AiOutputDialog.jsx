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
import { Button } from '@/components/ui/button';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function AiOutputDialog({openDialog, closeDialog, orgImageUrl, aiImageUrl}) {
  console.log("lodu", orgImageUrl)
  console.log("lodu1", aiImageUrl)
  return (
    
<AlertDialog open={openDialog}> 
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Result:</AlertDialogTitle>
    </AlertDialogHeader>
    
    {/* Slider with fixed height container */}
    {/* <div>  */}
      <ReactBeforeSliderComponent
        firstImage={{ imageUrl: aiImageUrl }}
        secondImage={{ imageUrl: orgImageUrl }}
      />
    {/* </div> */}

    <Button  
      onClick={() => closeDialog(false)}
    >
      Close
    </Button>
  </AlertDialogContent>
</AlertDialog>
  )
}

export default AiOutputDialog