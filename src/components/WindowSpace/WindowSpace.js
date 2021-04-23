import React, {  } from 'react'
import { Browser } from '../Browser/Browser';
import { FileExplorer } from '../FIleExplorer/FileExplorer';

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
       </div>
    )
}
