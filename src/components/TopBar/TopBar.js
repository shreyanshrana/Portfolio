import React from 'react'

export const TopBar = (props) => {
    return (
        <div id="TopBarContainer" className="bg-black text-white font-bold text-center px-2 py-1 handle" style={{ borderTopLeftRadius:'10px',  borderTopRightRadius:'10px' }}>
            {props.title}
            <div className="float-right text-right space-x-2 text-white cursor-default">
                <ion-icon name="remove-outline" style={{ color:"white", borderRadius:"50%" }}></ion-icon>
                <button className="outline-none" onClick={()=>{
                                                                let a = [...props.browserStyle];
                                                                a[0].height = window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 28 + 'px';
                                                                a[0].width = window.screen.width - 48 + 'px';
                                                                a[0].left = "0";
                                                                a[0].top = "1.75rem";
                                                                a[0].borderRadius = "0";
                                                                props.setBrowserStyle(a);
                                                                document.getElementById("TopBarContainer").style.borderTopLeftRadius = "0";
                                                                document.getElementById("TopBarContainer").style.borderTopRightRadius = "0";
                                                                props.setIframeHeight(window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 100 + 'px')
                                                                }
                                                            }>
                    <ion-icon name="stop-outline" style={{ color:"white", borderRadius:"50%" }}></ion-icon>
                </button>
                <button className="outline-none" onClick={()=>{
                                                                let a = [...props.browserStyle];
                                                                a[0].display = "none";
                                                                props.setBrowserStyle(a);
                                                                }
                                                            }>
                    <ion-icon name="close-outline" style={{ color:"white", backgroundColor:"#E95420", borderRadius:"50%" }}></ion-icon>
                </button>
            </div>
        </div>
    )
}
