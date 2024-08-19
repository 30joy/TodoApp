import { useEffect, useState } from "react";

export const TodoTimeDate= () => {
    const [dateTime,setdateTime]=useState("")
 
        useEffect(()=>{

            const interval = setInterval(()=>{
                  const now= new Date()
                  const formatedDate= now.toLocaleDateString()
                  const formatedTime= now.toLocaleTimeString()
                  setdateTime(`${formatedDate} - ${formatedTime}`)
              },1000);
      
            return ()=> clearInterval(interval)
          },[]);

         return <h2 className="date-time">{dateTime}</h2>
}