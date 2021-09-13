import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const ApplicationBar = () => {
    
    const {setVSURL, showApplications, setShowApplications, zIndex, setZIndex} = useContext(AppContext);

    const AppList = [
        {
            name:"Firefox",
            imgurl:"./img/ApplicationBar/firefox.png"
        },
        {
            name:"Spotify",
            imgurl:"./img/ApplicationBar/spotify.png"
        },
        {
            name:"Visual Studio Code",
            imgurl:"./img/ApplicationBar/vscode.png"
        },
        {
            name:"Terminal",
            imgurl:"./img/ApplicationBar/terminal.png"
        },
        {
            name:"File Explorer",
            imgurl:"./img/ApplicationBar/filemanager.png"
        },
        // {
        //     name:"Calculator",
        //     imgurl:"./img/ApplicationBar/calculator.png"
        // },
        // {
        //     name:"Settings",
        //     imgurl:"./img/ApplicationBar/settings.png"
        // },
    ]
    return (
        <div className="bg-black text-center w-12 inline-block h-full" >
            <div className="relative top-2">
                {
                    AppList.map(app => {
                        if(app.name === "Visual Studio Code")
                        return (
                                <div className="text-4xl cursor-pointer p-2 mr-auto"
                                        onClick={()=>{
                                            if(document.getElementsByClassName(app.name)[0].style.display === "block")
                                                document.getElementsByClassName(app.name)[0].style.display = "none"
                                            else
                                                document.getElementsByClassName(app.name)[0].style.display = "block"
                                            setShowApplications(false);
                                            document.getElementsByClassName(app.name)[0].style.zIndex = zIndex + 1;
                                            setVSURL("https://github1s.com/shreyanshrana/portfolio/blob/HEAD/src/App.js");
                                            setZIndex(zIndex + 2);
                                        }}
                                >
                                    <img src={app.imgurl} width="" className="w-7" alt={app.name}/>
                                </div>
                        )
                        else
                            return(
                                <div className="text-4xl cursor-pointer p-2 mr-auto"
                                        onClick={()=>{
                                            if(document.getElementsByClassName(app.name)[0].style.display === "block")
                                                document.getElementsByClassName(app.name)[0].style.display = "none"
                                            else
                                                document.getElementsByClassName(app.name)[0].style.display = "block"
                                            setShowApplications(false);
                                            document.getElementsByClassName(app.name)[0].style.zIndex = zIndex + 1;
                                            setZIndex(zIndex + 2);
                                        }}
                                >
                                    <img src={app.imgurl} width="" className="w-7" alt={app.name}/>
                                </div>
                            )
                    })
                }
            </div>
            <div className="absolute bottom-1">
                <div className="text-4xl cursor-pointer p-2 mr-auto"
                        onClick={() => {
                            setShowApplications(!showApplications);
                        }}
                    >
                    <img src='./img/ApplicationBar/app-grid.png' width="" className="w-7" alt="Weather"/>
                </div>
            </div>
        </div>
    )
}
