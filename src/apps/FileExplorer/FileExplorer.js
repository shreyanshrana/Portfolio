import React, { useContext, useState } from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';
import {AppContext} from '../../context/AppContext';

import DirectortyPath from "../DirectoryPath.json";


export const FileExplorer = () => {
    const [dir, setDir] = useState("Home");
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
                <div className="w-1/5 inline-block p-2 z-10 text-center cursor-pointer hover:bg-gray-200 hover:text-black " style={{ borderRadius :"5px" }} onClick={()=>{setDir(props.folderName)}}>
                    <img src={"img/FileExplorer/folder-" + props.folderName + ".png"} className="text-center m-auto" alt={props.folderName}/>
                    <p className="text-sm py-1">{props.folderName}</p>
                </div>
        )
    }

    const File = (props) => {
        return(
            <div className="w-1/5 text-white inline-block p-2 text-center cursor-pointer hover:bg-gray-200 hover:text-black" style={{ borderRadius :"5px", whiteSpace: "pre-line"}} onClick={()=>{
                                                                                                                                                document.getElementsByClassName(props.appName)[0].style.display = "block";
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
        let retObj = [];
        const renderFileList = (folderName) => {
            for(let file in DirectortyPath[folderName]){
                // console.log(DirectortyPath[folderName][file]);
                retObj.push(<File fileName={file} appName={DirectortyPath[folderName][file]['appName']} fileType={DirectortyPath[folderName][file]['fileType']} fileURL={DirectortyPath[folderName][file]['fileURL']}/>) 
            }
        return retObj;
        }

        const renderFolderList = () => {
            let retObj = [];
            for(let file in DirectortyPath){
                // console.log(DirectortyPath[folderName][file]);
                retObj.push(<Folder folderName={file}/>) 
            }
        return retObj;
        }
        if(dir === "Home"){
            return(
                <React.Fragment>
                    {
                        renderFolderList()
                    }
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    {
                        renderFileList(dir)
                    }
                </React.Fragment>
            )
        }
    }

    let a = (
        <React.Fragment>
            <div className="w-40 float-left h-full py-5" style={{ background:"var(--test)" }}>
                <div className="p-2 px-6 space-x-3 cursor-pointer bg-gray-500" onClick={()=>{setDir("Home")}}>
                    <ion-icon name="home"></ion-icon>
                    <p className="inline-block">Home</p>
                </div>
            </div>
            <div className="inline-block p-5 bg-black h-full text-white" style={{ width:"calc(100% - 10rem)" }}>
                {
                    renderFolders()
                }
                
            </div>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <AppContainer app={a} appName="File Explorer"/>
            <PreviewWidget link="" />
        </React.Fragment>
    )

 

}
