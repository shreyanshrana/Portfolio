import React, { useState } from 'react'

export const TopBar = (props) => {
    const [windowState, setWindowState] = useState("minimized");
    const [defaultWindowState] = useState({
        height : "500px",
        width : "700px",
        display : "block",
        borderRadius : "10px",
        left:"0",
        top:"1.75rem",
    });
    console.log(props.showMax)
    return (
        <div id="TopBarContainer" className="bg-black text-white font-bold text-center px-2 py-1 handle">
            {props.title}
            <div className="float-right text-right space-x-2 text-white cursor-default">
                <button className="outline-none" onClick={()=>{
                                                                document.getElementById(props.frameTitle + "Container").style.display = "none";
                                                                }
                                                            }>
                    <ion-icon name="remove-outline" style={{ color:"white", borderRadius:"50%" }}></ion-icon>
                </button>
                {
                (props.showMax === false)
                ?
                (
                    <React.Fragment/>
                )
                :
                (
                    <button className="outline-none" onClick={()=>{
                        if(windowState === "minimized"){
                            document.getElementById(props.frameTitle + "Container").style.height = window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 28 + 'px';
                            document.getElementById(props.frameTitle + "Container").style.width = window.screen.width - 48 + 'px';;
                            document.getElementById(props.frameTitle + "Container").style.left = "0px";
                            document.getElementById(props.frameTitle + "Container").style.top = "1.75rem";
                            document.getElementById(props.frameTitle + "Container").style.borderRadius = "0";
                            document.getElementById(props.frameTitle + "Container").style.transform = "translate(0,0)";
                            // document.getElementById("TopBarContainer").style.borderTopLeftRadius = "0";
                            // document.getElementById("TopBarContainer").style.borderTopRightRadius = "0";
                            if(props.setIframeHeight !== undefined)
                                document.getElementById("browserIframe").style.height = window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 120 + 'px';
                            setWindowState("maximized");
                        }
                        if(windowState === "maximized"){
                            document.getElementById(props.frameTitle + "Container").style.height = defaultWindowState.height;
                            document.getElementById(props.frameTitle + "Container").style.width = defaultWindowState.width;
                            document.getElementById(props.frameTitle + "Container").style.left = defaultWindowState.left;
                            document.getElementById(props.frameTitle + "Container").style.top = defaultWindowState.top;
                            // document.getElementById(props.frameTitle + "Container").style.borderRadius = defaultWindowState.borderRadius;
                            // document.getElementById("TopBarContainer").style.borderTopLeftRadius = "10px";
                            // document.getElementById("TopBarContainer").style.borderTopRightRadius = "10px";
                            if(props.setIframeHeight !== undefined)
                                document.getElementById("browserIframe").style.height = "428px";
                            setWindowState("minimized");
                        }
                        
                    }
                }>
                    <ion-icon name="stop-outline" style={{ color:"white", borderRadius:"50%" }}></ion-icon>
                </button>
                )
            }
                
                <button className="outline-none" onClick={()=>{
                                                                document.getElementById(props.frameTitle + "Container").style.display = "none";
                                                                }
                                                            }>
                    <ion-icon name="close-outline" style={{ color:"white", backgroundColor:"#E95420", borderRadius:"50%" }}></ion-icon>
                </button>
            </div>
        </div>
    )
}
