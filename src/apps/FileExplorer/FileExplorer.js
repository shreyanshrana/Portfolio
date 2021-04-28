import React, { useContext, useState } from 'react'
import Draggable from 'react-draggable';
import { TopBar } from '../../components/TopBar/TopBar';
import {AppContext} from '../../context/AppContext';



export const FileExplorer = () => {
    const [dir, setDir] = useState("Home");
    const [browserStyle, setBrowserStyle] = useState([{
        height : "500px",
        width : "700px",
        display : "none",
        borderRadius : "10px",
        left:"100px",
        top:"50px",
    }])
    const [iframURL] = useState();
    const [showPreviewWidget, setShowPreviewWidget] = useState("none")

    const {setImgURL, setPdfURL, setSpotifyURL, setVideoURL} = useContext(AppContext);

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
                                                                                                                                                document.getElementById(props.fileType+"Container").style.display = "block";
                                                                                                                                                if(props.fileType === "img")
                                                                                                                                                    setImgURL(props.fileURL);
                                                                                                                                                if(props.fileType === "pdf")
                                                                                                                                                    setPdfURL(props.fileURL);
                                                                                                                                                if(props.fileType === "spotify"){
                                                                                                                                                    setSpotifyURL(props.fileURL);
                                                                                                                                                    document.getElementById("s"+props.fileURL.substr(40,22)).style.fontWeight = "bold";
                                                                                                                                                    document.getElementById("s"+props.fileURL.substr(40,22)).style.backgroundColor = "#8B5CF6";
                                                                                                                                                    document.querySelectorAll(".spotify-playlist:not(#s" + props.fileURL.substr(40,22) + ")").forEach(button => {button.style.fontWeight = "100"; button.style.backgroundColor = "#4C1D95"; return null;})
                                                                                                                                                }
                                                                                                                                                if(props.fileType === "video"){
                                                                                                                                                    setVideoURL(props.fileURL);
                                                                                                                                                    // document.getElementById("s"+props.fileURL.substr(40,22)).style.fontWeight = "bold";
                                                                                                                                                    // document.getElementById("s"+props.fileURL.substr(40,22)).style.backgroundColor = "#8B5CF6";
                                                                                                                                                    // document.querySelectorAll(".spotify-playlist:not(#s" + props.fileURL.substr(40,22) + ")").forEach(button => {button.style.fontWeight = "100"; button.style.backgroundColor = "#4C1D95"; return null;})
                                                                                                                                                }
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
                    <File fileName="Fate - UBW" fileType="img" fileURL="https://drive.google.com/uc?id=10dLI6KTidxroLB-QI8_OA_K7GfCq73yI"/>
                </React.Fragment>
            )
        }
        if(dir === "Music"){
            return(
                <React.Fragment>
                    <File fileName="Playlist - Poppy" fileType="spotify" fileURL="https://open.spotify.com/embed/playlist/3AGIYCxTLf33EYmTLI3tgM"/>
                    <File fileName="Playlist - Animeeeee" fileType="spotify" fileURL="https://open.spotify.com/embed/playlist/3dMmPVKe2qQ3eVMKBZmZiY"/>
                    <File fileName="Playlist - Latin Luv" fileType="spotify" fileURL="https://open.spotify.com/embed/playlist/68IIT4nHtPftskRP6bq7vP"/>
                    <File fileName="Playlist - kPop" fileType="spotify" fileURL="https://open.spotify.com/embed/playlist/6zYcVunMlPPb8Yy172QCCA"/>
                    <File fileName="Playlist - EDM Timez" fileType="spotify" fileURL="https://open.spotify.com/embed/playlist/4MDNuoYAmbklM4FvKSxNty"/>
                    <File fileName="Playlist - creme de la creme" fileType="spotify" fileURL="https://open.spotify.com/embed/playlist/5pvRx25Iw1HLb8TleuKJbO"/>
                </React.Fragment>
            )
        }
        if(dir === "Videos"){
            return(
                <React.Fragment>
                    <File fileName="A Very Gergich Breakfast" fileType="video" fileURL="https://www.youtube.com/embed/GTbJEIXU1Ms"/>
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
                <div id="fileContainer"
                            // nodeRef={nodeRef}
                            style={browserStyle[0]} 
                            className="absolute bg-red-50 inline-block z-20">
                        <TopBar title="File Explorer" setBrowserStyle={setBrowserStyle} browserStyle={browserStyle} frameTitle="file"/>
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
