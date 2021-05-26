import React, { useState } from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';

export const Browser = (props) => {
    const [url, setURL] = useState("https://www.google.com/webhp?igu=1");
    const [gotoURL, setGotoURL] = useState("https://www.google.com/webhp?igu=1");

    const a = (
        <React.Fragment>
            <div className="w-full bg-gray-700 h-10">
                <div className="w-2/12 inline-block text-center text-xl space-x-3 text-white h-10 p-2 float-left">
                    <button onClick={()=>{}}>
                        <ion-icon name="refresh-outline"></ion-icon>
                    </button>
                    <button onClick={()=>{document.getElementsByTagName('iframe')[0].src = ("https://www.google.com/webhp?igu=1")}}>
                        <ion-icon name="home-outline"></ion-icon>
                    </button>
                </div>
                <input className="w-9/12 outline-none border-none px-3 text-sm h-7 " style={{ borderRadius:"15px"}} value={url} id="addressURL" onChange={e=>{setURL(e.target.value)}}/>
                <div className="text-white inline-block text-center w-1/12 h-10 p-2">
                    <button onClick={()=>{setGotoURL(url)}} className="m-auto">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </button>
                </div>
            </div>
            <div className="w-full bg-gray-700 space-x-2 grid grid-cols-4 h-6">
                <div className = "cursor-pointer text-center text-white inline-block text-sm">
                    <a href="https://github.com/shreyanshrana/" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-github"></ion-icon>Github
                    </a>
                </div>
                <div className = "cursor-pointer text-center text-white inline-block text-sm">
                    <a href="https://dribbble.com/shreyanshrana" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-dribbble"></ion-icon>Dribbble
                    </a>
                </div>
                <div className = "cursor-pointer text-center text-white inline-block text-sm">
                    <a href="https://www.instagram.com/shreyanshrana/" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-instagram"></ion-icon>Instagram
                    </a>
                </div>
                <div className = "cursor-pointer text-center text-white inline-block text-sm">
                    <a href="https://www.tvtime.com/en/user/14836318/profile" target="_blank" rel="noreferrer">
                        <ion-icon name="tv-outline"></ion-icon>TV Time
                    </a>
                </div>
            </div>
            <iframe src={gotoURL} title="Browser" width="100%" frameBorder="0" id='browserIframe' style={{ height:"calc(100% - 4rem)" }} onClick={e=>{console.log(e)}}>
            </iframe>
        </React.Fragment>
    )
    return (
        <AppContainer app={a} appName="Firefox"/>
    )
}
