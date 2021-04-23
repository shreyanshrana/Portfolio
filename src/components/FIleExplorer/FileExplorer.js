import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { TopBar } from '../TopBar/TopBar';



export const FileExplorer = () => {
    const [dir, setDir] = useState("Home");
    const [browserStyle, setBrowserStyle] = useState([{
        height : "500px",
        width : "700px",
        display : "block",
        borderRadius : "10px",
        left:"100px",
        top:"50px",
    }])
    const [iframURL, setIframeURL] = useState();
    const [showPreviewWidget, setShowPreviewWidget] = useState("none")
   
    const PreviewWidget =(props)=>{
        return(
            <React.Fragment>
                <div id="PreviewWidget" className="h-screen w-screen fixed bg-black bg-opacity-75 z-50 top-0 left-0" style={{ display:showPreviewWidget }} onClick={()=>{
                                                                                                                        // document.getElementById("PreviewWidget").style.display = "none";
                                                                                                                        setShowPreviewWidget("none");
                                                                                                                        }}>
                    <h1>hello</h1>
                    <iframe src={iframURL} width="75%" height="90%" className="m-auto" title="PreviewWidget" />
                </div>
            </React.Fragment>
        )
    }

    const Folder = (props)=>{
        return(
                <div className="w-1/5 inline-block p-2 z-10 text-center cursor-pointer hover:bg-gray-200" style={{ borderRadius :"5px" }} onClick={()=>{setDir(props.folderName)}}>
                    <img src={"img/FileExplorer/folder-" + props.folderName + ".png"} className="text-center m-auto" alt={props.folderName}/>
                    <p className="text-sm py-1">{props.folderName}</p>
                </div>
        )
    }

    const File = (props) => {
        return(
            <div className="w-1/5 inline-block p-2 text-center cursor-pointer hover:bg-gray-200" style={{ borderRadius :"5px" }} onClick={()=>{
                                                                                                                                                // console.log("click");
                                                                                                                                                setShowPreviewWidget("block");
                                                                                                                                                // document.getElementById("PreviewWidget").style.display = "block";
                                                                                                                                                // console.log(document.getElementById("PreviewWidget").style.display);
                                                                                                                                                setIframeURL(props.fileURL);
                                                                                                                                            }}>
                <img src={"img/FileExplorer/file-" + props.fileType + ".png"} className="text-center m-auto" alt={props.fileName}/>
                <p className="text-sm py-1">{props.fileName}</p>
            </div>
    )
    }
    const renderFolders = () =>{
        if(dir === "Documents"){
            return(
                <React.Fragment>
                    <File fileName="Resume" fileType="pdf" fileURL="https://drive.google.com/file/d/1DiLSp7_PgwuLLuJ-EhtH7rjjAuS6u5f2/preview?usp=drivesdk"/>
                </React.Fragment>
            )
        }
        if(dir === "Pictures"){
            return(
                <React.Fragment>
                    <File fileName="Fate - UBW" fileType="img" fileURL="https://drive.google.com/file/d/10dLI6KTidxroLB-QI8_OA_K7GfCq73yI/preview?usp=drivesdk"/>
                </React.Fragment>
            )
        }
        if(dir === "Music"){
            return(
                <React.Fragment>
                    <File fileName="Spotify - Poppy" fileType="music" fileURL="https://open.spotify.com/embed/playlist/3AGIYCxTLf33EYmTLI3tgM"/>
                    <File fileName="Spotify - Animeeeee" fileType="music"/>
                    <File fileName="Spotify - Latin Luv" fileType="music"/>
                    <File fileName="Spotify - kPop" fileType="music"/>
                    <File fileName="Spotify - EDM Timez" fileType="music"/>
                    <File fileName="Spotify - creme de la creme" fileType="music"/>
                </React.Fragment>
            )
        }
        else
            return(
                <React.Fragment>
                    <Folder folderName="Desktop"/>
                    <Folder folderName="Documents"/>
                    <Folder folderName="Downloads"/>
                    <Folder folderName="Pictures"/>
                    <Folder folderName="Music"/>
                    <Folder folderName="Videos"/>
                </React.Fragment>
            )
    }
    return (
        <React.Fragment>
            <Draggable
                axis="both"
                handle=".handle"
                grid={[1,1]}
                bounds="parent">
                <div id="Container"
                            // nodeRef={nodeRef}
                            style={browserStyle[0]} 
                            className="absolute bg-red-50 inline-block z-20">
                        <TopBar title="File Explorer" setBrowserStyle={setBrowserStyle} browserStyle={browserStyle}/>
                        <div className="" style={{ height:"468px" }}>
                            <div className="w-40 float-left bg-gray-400 h-full py-5">
                                <div className="p-2 px-6 space-x-3 cursor-pointer hover:bg-gray-500" >
                                    <ion-icon name="time-outline"></ion-icon>
                                    <p className="inline-block">Recents</p>
                                </div>
                                <div className="p-2 px-6 space-x-3 cursor-pointer hover:bg-gray-500" onClick={()=>{setDir("Home")}}>
                                    <ion-icon name="home"></ion-icon>
                                    <p className="inline-block">Home</p>
                                </div>
                            </div>
                            <div className="w-3/4 inline-block p-5">
                                {
                                    renderFolders()
                                }
                                
                            </div>
                        </div>
                    </div>
            </Draggable>
            <PreviewWidget link="" />
        </React.Fragment>
    )

 

}
