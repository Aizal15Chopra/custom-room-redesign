 "use client"
 import React from 'react'
 
 function Provider(children ) {

    const {uer} = useSuser();
    useEffect(()=>{
        user&&verifyUser();
    },[user])

    /**
     * Verify User 
     * */
    const verifyUser = ()=>{
        const dataResult = await 
    }
   return (
     <div>
        {children}
     </div>
   )
 }
 
 export default Provider




