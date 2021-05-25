import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const ApplicationBar = () => {
    
    const {setVSURL} = useContext(AppContext);

    return (
        <div className="bg-black text-center w-12 inline-block h-full" >
            <div className="relative top-10">
                <div className="text-4xl cursor-pointer p-2 mr-auto"
                    onClick={()=>document.getElementById("browserContainer").style.display = "block"}
                    >
                    <img src='img/ApplicationBar/firefox.png' width="" className="w-7" alt="Firefox"/>
                </div>
                <div className="text-4xl cursor-pointer p-2 mr-auto"
                    onClick={()=>document.getElementsByClassName("Spotify")[0].style.display = "block"}
                    >
                    <img src='./img/ApplicationBar/spotify.png' width="" className="w-7" alt="Spotify"/>
                </div>
                <div className="text-4xl cursor-pointer p-2 mr-auto"
                    onClick={()=>{
                                document.getElementsByClassName("Visual Studio Code")[0].style.display = "block"
                                setVSURL("https://github1s.com/shreyanshrana/portfolio/blob/HEAD/src/App.js");
                            }
                        }
                    >
                    <img src='./img/ApplicationBar/vscode.png' width="" className="w-7" alt="VS Code"/>
                </div>
                <div className="text-4xl cursor-pointer p-2 mr-auto"
                    onClick={()=>document.getElementsByClassName("Terminal")[0].style.display = "block"}
                    >
                    <img src='./img/ApplicationBar/terminal.png' width="" className="w-7" alt="Terminal"/>
                </div>
                <div className="text-4xl cursor-pointer p-2 mr-auto"
                    onClick={()=>document.getElementById("fileContainer").style.display = "block"}
                    >
                    <img src='./img/ApplicationBar/filemanager.png' width="" className="w-7" alt="File Manager"/>
                </div>
                <div className="text-4xl cursor-pointer p-2 mr-auto"
                    onClick={()=>document.getElementById("calcContainer").style.display = "block"}
                    >
                    <img src='./img/ApplicationBar/calculator.png' width="" className="w-7" alt="Calc"/>
                </div>
                <div className="text-4xl cursor-pointer p-2 mr-auto"
                    onClick={()=>document.getElementById("weatherContainer").style.display = "block"}
                    >
                    <img src='./img/ApplicationBar/weather.png' width="" className="w-7" alt="Weather"/>
                </div>
            </div>
        </div>
    )
}
