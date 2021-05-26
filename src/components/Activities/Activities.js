import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

export const Activities = () => {

    const {showApplications, bgURL} = useContext(AppContext);

    const openApp = (app) => {
        document.getElementsByClassName(app)[0].style.display = "block";
        document.getElementById("activitiesContainer").style.display = "none";
    }

    const AppList = [
        {
            name:"Firefox",
            imgurl:"./img/ApplicationBar/firefox.png"
        },
        {
            name:"Calculator",
            imgurl:"./img/ApplicationBar/calculator.png"
        },
        {
            name:"File Explorer",
            imgurl:"./img/ApplicationBar/filemanager.png"
        },
        {
            name:"Image Viewer",
            imgurl:"./img/ApplicationBar/gnome-photos.png"
        },
        {
            name:"Document Viewer",
            imgurl:"./img/ApplicationBar/libreoffice-main.png"
        },
        {
            name:"Settings",
            imgurl:"./img/ApplicationBar/settings.png"
        },
        {
            name:"Spotify",
            imgurl:"./img/ApplicationBar/spotify.png"
        },
        {
            name:"Terminal",
            imgurl:"./img/ApplicationBar/terminal.png"
        },
        {
            name:"Video Player",
            imgurl:"./img/ApplicationBar/totem.png"
        },
        {
            name:"Visual Studio Code",
            imgurl:"./img/ApplicationBar/vscode.png"
        },
        {
            name:"Weather",
            imgurl:"./img/ApplicationBar/weather.png"
        },
    ]
    return (
        (showApplications)
        ? (
            <div id="activitiesContainer"
                style={{ 
                    height : "100%",
                    width : "100%",
                    left:"0",
                    zIndex:"99999"
                }} 
                className="absolute inline-block">
                <div id="Activities" className="w-full h-full z-50 top-0 left-0" style={{ background:"url(" + bgURL + ")", backgroundSize:'cover', backgroundPosition:'top' }}>
                    <div className="w-full h-full z-50 top-0 left-0" style={{ background:"rgba(0,0,0,0.6)"}}>
                        <div className="m-auto text-white" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>
                            <div className="grid grid-cols-5 text-center " style={{ gridGap:"100px" }}>
                                {
                                    AppList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map(app => {
                                        return (
                                            <div className="text-xs cursor-pointer p-2 mr-auto space-y-2" onClick={()=>openApp(app.name)}>
                                                <img src={app.imgurl} width="" className="w-16 mx-auto" alt={app.name}/>
                                                <h1>{app.name}</h1>
                                            </div>
                                        )
                                    })
                                }
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
        : (
            <React.Fragment/>
        )
    )
}
