import React from 'react'

export const Activities = () => {
    const elem = document.getElementById("WindowSpace");
    // console.log(elem);

    const openApp = (app) => {
        document.getElementById(app + "Container").style.display = "block";
        document.getElementById("activitiesContainer").style.display = "none";
    }
    return (
    <div id="activitiesContainer"
            style={{ 
                height : (elem !== null ) ? window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 28 + 'px' : "10px",
                // height : "100%",
                width : window.screen.width - 100 + 'px',
                display : "none",
                left:"0",
                top:"1.75rem",
                zIndex:"30"
            }} 
            className="absolute bg-white inline-block">
            <div id="Activities" className="w-full fixed bg-black z-50 top-0 left-0" style={{ height:"100%" }}>
                <div className="m-auto text-white" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>
                    <div className="grid grid-cols-5 text-center " style={{ gridGap:"100px" }}>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("browser")}>
                            <img src='./img/ApplicationBar/firefox.png' width="" className="w-12" alt="Firefox"/>
                            <h1>Browser</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("calc")}>
                            <img src='./img/ApplicationBar/calculator.png' width="" className="w-12" alt="Calculator"/>
                            <h1>Calculator</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("file")}>
                            <img src='./img/ApplicationBar/filemanager.png' width="" className="w-12" alt="File Explorer"/>
                            <h1>File Explorer</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("img")}>
                            <img src='./img/ApplicationBar/gnome-photos.png' width="" className="w-12" alt="Image Viewer"/>
                            <h1>Image Viewer</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("pdf")}>
                            <img src='./img/ApplicationBar/libreoffice-main.png' width="" className="w-12" alt="PDF Viewer"/>
                            <h1>PDF Viewer</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("settings")}>
                            <img src='./img/ApplicationBar/settings.png' width="" className="w-12" alt="Settings"/>
                            <h1>Settings</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("spotify")}>
                            <img src='./img/ApplicationBar/spotify.png' width="" className="w-12" alt="Spotify"/>
                            <h1>Spotify</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("terminal")}>
                            <img src='./img/ApplicationBar/terminal.png' width="" className="w-12" alt="Terminal"/>
                            <h1>Terminal</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("video")}>
                            <img src='./img/ApplicationBar/totem.png' width="" className="w-12" alt="Video Player"/>
                            <h1>Video Player</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("vscode")}>
                            <img src='./img/ApplicationBar/vscode.png' width="" className="w-12" alt="Visual Studio Code"/>
                            <h1>Visual Studio Code</h1>
                        </div>
                        <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp("weather")}>
                            <img src='./img/ApplicationBar/weather.png' width="" className="w-12" alt="Weather"/>
                            <h1>Weather</h1>
                        </div>
                </div>
            </div>
        </div>
    </div>
)
}
