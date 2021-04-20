import React from 'react'
import Draggable from 'react-draggable';
import { Browser } from '../Browser/Browser';

export const WindowSpace = () => {
    let width = window.screen.width;

    return (
        <div id="WindowSpace" 
            className="absolute h-screen z-0 inline-block pt-7"
            style={{width:(width - 48) + 'px'}}
            >
            <Draggable
            axis="both"
            handle=".handle"
            grid={[1,1]}
            bounds="parent"
            // onStart={()=>{console.log("start")}}
            // onStop={()=>{console.log("stop")}}
            // nodeRef={nodeRef}
            >
                <div id="BrowserContainer"
                        // nodeRef={nodeRef}
                        style={{ width:"50%", height:"400px", borderRadius:"10px"}} 
                        className="absolute bg-red-50 inline-block">
                    <Browser title="Firefox" width="100%" draggable="true"/>
                </div>
        </Draggable>
       </div>
    )
}
