import React, { useContext } from 'react'
import Draggable from 'react-draggable';
import { TopBar } from '../../components/TopBar/TopBar';
import { AppContext } from '../../context/AppContext';

export const VideoPlayer = () => {
    const {videoURL} = useContext(AppContext);

    return (
            <Draggable
            axis="both"
            handle=".handle"
            grid={[1,1]}
            bounds="parent">
            <div id="videoContainer"
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
                <TopBar title="Video Player" frameTitle="video"/>
                    <div id="PreviewWidget" className="w-full fixed bg-black bg-opacity-75 z-50 top-8 left-0" style={{ height:"95%" }}>
                        <iframe src={videoURL} width="100%" height="100%" className="m-auto"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>
                    </div>
            </div>
    </Draggable>
    )
}
