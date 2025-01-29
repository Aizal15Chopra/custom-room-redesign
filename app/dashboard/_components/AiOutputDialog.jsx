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

function AiOutputDialog({openDialog, closeDialog, orgImage, aiImage}) {
  return (
<AlertDialog open={openDialog}> 
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Result:</AlertDialogTitle>
    </AlertDialogHeader>
    
    {/* Slider with fixed height container */}
    <div className="h-[500px] w-full"> 
      <ReactBeforeSliderComponent
        firstImage={{ imageUrl: aiImage }}
        secondImage={{ imageUrl: orgImage }}
      />
    </div>

    <Button 
      className="w-full mt-4" 
      onClick={() => closeDialog(false)}
    >
      Close
    </Button>
  </AlertDialogContent>
</AlertDialog>
  )
}

export default AiOutputDialog