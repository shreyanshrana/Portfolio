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
    return (
        <div id="TopBarContainer" className="text-white font-bold text-center px-2 py-1 handle h-8">
            {props.title}
            <div className="float-right text-right space-x-2 text-white cursor-default">
                <button onClick={()=>{
                                                                document.getElementsByClassName(props.title)[0].style.display = "none";
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
                    <button onClick={()=>{
                        if(windowState === "minimized"){//on clicking maximize
                            document.getElementsByClassName(props.title)[0].style.height = "100%";
                            document.getElementsByClassName(props.title)[0].style.width = "100%";
                            document.getElementsByClassName(props.title)[0].style.left = "0px";
                            document.getElementsByClassName(props.title)[0].style.top = "0";
                            document.getElementsByClassName(props.title)[0].style.borderRadius = "0";
                            document.getElementsByClassName(props.title)[0].style.transform = "translate(0,0)";
                            if(props.setIframeHeight !== undefined)
                                document.getElementById("browserIframe").style.height = window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 120 + 'px';
                            setWindowState("maximized");
                        }
                        if(windowState === "maximized"){ //on clicking minimize
                            document.getElementsByClassName(props.title)[0].style = "";
                            console.log(document.getElementsByClassName(props.title)[0].style);
                            document.getElementsByClassName(props.title)[0].style.display = "block";
                            document.getElementById("TopBarContainer").style = "";
                            setWindowState("minimized");
                        }
                        
                    }
                }>
                    <ion-icon name="stop-outline" style={{ color:"white", borderRadius:"50%" }}></ion-icon>
                </button>
                )
            }
                
                <button onClick={()=>{
                                                                document.getElementsByClassName(props.title)[0].style.display = "none";
                                                                }
                                                            }>
                    <ion-icon name="close-outline" style={{ color:"white", backgroundColor:"#E95420", borderRadius:"50%" }}></ion-icon>
                </button>
            </div>
        </div>
    )
}
