'use client'
import {useEffect, useState} from 'react'
import {Helmet} from 'react-helmet';

export default function Component(){
    const [data, setData] = useState<string>('');

    const callApi = async () => {
        const res = await getData();
        setData(res)
    }

    useEffect(()=> {
        callApi();
    }, [])

    return (
        <>
            <Helmet><title>{data}</title></Helmet>
            <div>component</div>
        </>
    )
}

const getData:()=>Promise<string> = () => new Promise((resolve) => resolve('title'));

// 헬멧은 타이틀을 어떻게 처리하지?
// const updateTitle = (title, attributes) => {
//     if (typeof title !== "undefined" && document.title !== title) {
//         document.title = flattenArray(title);
//     }

//     updateAttributes(TAG_NAMES.TITLE, attributes);
// };


// 해당 함수가 든 함수를
// withSideEffect
// 이걸 통해서 동시에 동작 시킨다.