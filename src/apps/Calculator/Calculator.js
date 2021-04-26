import React from 'react'
import Draggable from 'react-draggable'
import { TopBar } from '../../components/TopBar/TopBar'

export const Calculator = () => {
    return (
        <Draggable
        axis="both"
        handle=".handle"
        grid={[1,1]}
        bounds="parent">
            <div id="calcContainer"
                    style={{ 
                        // height : window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 28 + 'px',
                        height : "500px",
                        width : "700px",
                        display : "none",
                        left:"0",
                        top:"1.75rem",
                        zIndex:"25"
                    }} 
                    className="absolute bg-white inline-block">
                <TopBar title="Video Player" frameTitle="calc"/>
                    <div id="PreviewWidget" className="w-full fixed bg-black bg-opacity-75 z-50 top-8 left-0" style={{ height:"95%" }}>
                        <iframe title="calculator" src={"https://web2.0calc.com/widgets/18c9b111ba6d/"} width="100%" height="100%" className="m-auto"></iframe>
                    </div>
            </div>
        </Draggable>    
    )
}
