'use client'
import {useEffect, useState} from 'react'

export default function Component(){
    const [data, setData] = useState('')

    const callApi = async () => {
        const res = await getData();
        setData(res)
    }

    useEffect(()=> {
        callApi();
    }, [])

    useEffect(()=>{
        if(data){
            console.log(data)
            document.title = data;
        }

      }, [data])
      
    return (
        <div>component</div>
    )
}

const getData:()=>Promise<string> = () => new Promise((resolve) => resolve('title'));
