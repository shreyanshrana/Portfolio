import React, {  } from 'react'
import {  PdfViewer } from '../../apps/PdfViewer/PdfViewer';
import { FileExplorer } from '../../apps/FileExplorer/FileExplorer';
import { ImgViewer } from '../../apps/ImgViewer/ImgViewer';
import { SpotifyViewer } from '../../apps/Spotify/Spotify';

export const WindowSpace = (props) => {
    let width = window.screen.width;
    // let height = window.screen.height;
   
    return (
        <div id="WindowSpace" 
            className="absolute h-screen z-0 inline-block pt-7"
            style={{width:(width - 48) + 'px', height:"100vh"}}
            >
            {/* <Browser/> */}
            <FileExplorer/>
            <ImgViewer/>
            <PdfViewer/>
            <SpotifyViewer/>
       </div>
    )
}
