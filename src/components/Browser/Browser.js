import React, { useState } from 'react'
import { TopBar } from '../TopBar/TopBar'

export const Browser = (props) => {
    const [url, setURL] = useState("https://www.google.com/webhp?igu=1");
    return (
        <div 
            style={{ width:props.width, borderTopLeftRadius:'10px',  borderTopRightRadius:'10px', height:""}} >
            <TopBar title={props.title}/>
            <div className="w-full bg-gray-500">
                <div className="w-1/12 inline-block text-center text-xl">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    <ion-icon name="refresh-outline"></ion-icon>
                </div>
                <input className="w-10/12 outline-none border-none" style={{height:"24px"}}/>
            </div>
            <iframe src={url} title="W3Schools Free Online Web Tutorials" width="100%" frameBorder="0" height="340px">
            </iframe>
        </div>
    )
}
