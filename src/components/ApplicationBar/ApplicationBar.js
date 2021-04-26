import React from 'react'

export const ApplicationBar = () => {
    return (
        <div className=" bg-black top-0 z-10 text-center w-12 inline-block" style={{ height:'100vh' }}>
            <div className="relative top-10">
                <div className="text-4xl cursor-pointer p-2 mr-auto">
                    <img src='./img/ApplicationBar/firefox.png' width="" className="w-7" alt="Firefox"/>
                </div>
                <div className="text-4xl cursor-pointer p-2 mr-auto">
                    <img src='./img/ApplicationBar/spotify.png' width="" className="w-7" alt="Spotify"/>
                </div>
                <div className="text-4xl cursor-pointer p-2 mr-auto">
                    <img src='./img/ApplicationBar/spotify.png' width="" className="w-7" alt="Spotify"/>
                </div>
            </div>
        </div>
    )
}
