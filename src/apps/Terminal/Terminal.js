import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { TopBar } from '../../components/TopBar/TopBar'

export const Terminal = () => {

    const [cmd, setCmd] = useState("");
    const onEnter = (e) => {
        let a = document.createElement("div")
        a.classList.add("terminalOutput")
        // a.innerHTML = "hello";
        console.log(cmd);
        if(e.key === "Enter")
        {
            switch(cmd){
                case "ls":
                    a.innerHTML = "ls"
                    break;
                case "clear":
                    // console.log(document.getElementsByClassName("terminalOutput"));
                    Array.from(document.getElementsByClassName("terminalOutput")).map(e => {
                        e.remove();
                        return null;
                    });
                    break;
                default:
                    a.innerHTML = "Invalid command, please try again :)"
            }
        }
        document.getElementById("terminalWidget").append(a)
    }
    return (
        <Draggable
        axis="both"
        handle=".handle"
        grid={[1,1]}
        bounds="parent">
        <div id="terminalContainer"
                style={{ 
                    // height : window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 28 + 'px',
                    height : "500px",
                    width : "700px",
                    display : "block",
                    left:"0",
                    top:"1.75rem",
                    zIndex:"25"
                }} 
                className="absolute bg-white inline-block">
            <TopBar title="portfolio - Visual Studio Code" frameTitle="terminal"/>
                <div id="terminalWidget" className=" overflow-auto w-full fixed bg-black text-green-600 font-bold z-50 top-8 left-0 p-1" style={{ height:"95%" }}>
                    <label>sheryansh@potato-pc</label> > 
                    <input className="bg-black mx-1 text-white p-1 focus:outline-none" placeholder="|" onKeyUp={(e)=>onEnter(e)} onChange={(e)=>{setCmd(e.target.value)}}/>
                </div>
        </div>
</Draggable>
    )
}
