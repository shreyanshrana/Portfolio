import React from 'react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { Browser } from '../Browser/Browser';

export const WindowSpace = () => {
    let offsetX;
    let offsetY;
    let width = window.screen.width;
    const onDragStart = function(event) {
        // console.log(event);
        const rect = event.target.getBoundingClientRect();

        offsetX = event.clientX - rect.x;
        offsetY = event.clientY - rect.y;
    };

    const drop_handler = function(event) {
        event.preventDefault();
        let id1 = document.getElementById("id1");
        let id2 = document.getElementById("id2");
        console.log(event.clientX + " , " + event.clientY + "\n" + window.screen.width + " , " + window.screen.height);

        if(event.clientX < window.screen.width && event.clientY < window.screen.height)
        {
            id1.style.position = 'relative';
            id1.style.left = event.clientX  + 'px';
            id1.style.top = event.clientY  + 'px';
        }// id2.appendChild(document.getElementById("id1"));
    };

    const dragover_handler = function(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };
    return (
        <div id="id2" 
            className="absolute h-screen z-0 inline-block py-7"
            onDrop={(event)=>{drop_handler(event)}} 
            onDragOver={(event)=>{dragover_handler(event)}} 
            style={{width:(width - 48) + 'px'}}
            >
          <div id="id1" 
                draggable
                onDragStart={(event)=>{onDragStart(event)}} 
                style={{ width:"50%"}} 
                className="absolute bg-red-50 inline-block">
            <Browser title="Firefox" width="100%" draggable="true"/>
          </div>
       </div>
    )
}
