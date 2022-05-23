import { useState } from "react";

export const useHttpGet = <T>() => {

  const [data,setData] = useState<T | null>(null);
  const [status,setStatus] = useState<number>(0);
  const [error,setError] = useState<boolean>(false)
  const [loading,setLoading] = useState<boolean>(false)

  const httpGet = (endpoint:string):void => {
    (
      async () => {
        try{
          setLoading(true)
          await fetch(`https://my-json-server.typicode.com/TomaszJaworski/test-api/${endpoint}`,
            { method: 'GET',
            headers : {'Content-Type': 'text/plain'},
            })
            .then(res => {
              setStatus(res.status) 
              return res})
            .then( res => res.json())
            .then( res => {setData(res)})
            .catch(()=>{console.log('wystapił błąd')})
        }catch(err){
          setError(true)
        }finally{
          setLoading(false)
        }
      }
    )()
  }
  return { data, status, error, loading, httpGet }
}