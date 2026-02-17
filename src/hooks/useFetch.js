import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [state , setState] = useState({data:[],
                                       loading:false,
                                       error:null
                                    })
    
    async function fetchLocation(){
        try{
            setState(prev => {
                return {...prev,loading:true}
            })

            const res = await fetch(url)
            if(!res.ok){
                throw new Error("Server is down at this time!")
            }
            const data = await res.json()
            setState(prev => {
                return {...prev,loading:false,data}
            })

        }catch(err){
             setState(prev => {
                return{...prev,loading:false,error:err.message}
            })
        }
    }
    useEffect(()=>{
            let allow = false 
          
            if(!allow){
                fetchLocation()
            }

        return ()=>{
            allow = true
        }
    },[])
    return state
}

export default useFetch