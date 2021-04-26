import React, { useContext, useState } from 'react'
import Draggable from 'react-draggable'
import { TopBar } from '../../components/TopBar/TopBar'
import {AppContext} from '../../context/AppContext'

export const ImgViewer = () => {
    const {imgURL} = useContext(AppContext);

    let height = (document.getElementById("WindowSpace") !== null) ? window.getComputedStyle(document.getElementById("imgContainer"),"").height.substr(0,3) : 100
    console.log(height);
    return (
        <Draggable
                axis="both"
                handle=".handle"
                grid={[1,1]}
                bounds="parent">
                <div id="imgContainer"
                        style={{ 
                            // height : window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 28 + 'px',
                            height : "500px",
                            width : "700px",
                            display : "none",
                            borderRadius : "10px",
                            left:"0",
                            top:"1.75rem",
                            zIndex:"25"
                        }} 
                        className="absolute bg-red-50 inline-block">
                    <TopBar title="Image Viewer" frameTitle="img"/>
                        <div id="PreviewWidget" className="w-full fixed bg-gray-200" style={{ height: "95%"}}>
                            <img src={imgURL} className="m-auto" style={{position:"relative", top:"50%", transform:"translate(0,-50%)", height:"95%"}}/>
                        </div>
                </div>
        </Draggable>
    )
}
