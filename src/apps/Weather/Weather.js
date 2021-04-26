import React from 'react'
import Draggable from 'react-draggable'
import { TopBar } from '../../components/TopBar/TopBar'

export const Weather = () => {
    return (
        <Draggable
        axis="both"
        handle=".handle"
        grid={[1,1]}
        bounds="parent">
            <div id="weatherContainer"
                    style={{ 
                        // height : window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 28 + 'px',
                        height : "400px",
                        width : "790px",
                        display : "block",
                        left:"0",
                        top:"1.75rem",
                        zIndex:"25"
                    }} 
                    className="absolute bg-white inline-block">
                <TopBar title="Weather" frameTitle="weather" showMax={false}/>
                    <div id="PreviewWidget" className="w-full fixed bg-black bg-opacity-75 z-50 top-8 left-0" style={{ height:"95%" }}>
                        <iframe title="weather" src={"https://www.theweather.com/getwid/5d148ef8e641649e190058616032ebde/"} width="100%" height="100%" className="m-auto"></iframe>
                    </div>
            </div>
        </Draggable>    
    )
}
