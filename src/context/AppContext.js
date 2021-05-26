import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [displayImgViewer, setDisplayImgViewer] = useState("none");
    const [imgURL, setImgURL] = useState("");
    const [pdfURL, setPdfURL] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [spotifyURL, setSpotifyURL] = useState("https://open.spotify.com/embed/playlist/3AGIYCxTLf33EYmTLI3tgM");
    const [VSURL, setVSURL] = useState("");
    const [showApplications, setShowApplications] = useState(false);
    const [bgURL, setBgURL] = useState("./img/bg.png");
    const [zIndex, setZIndex] = useState(10);
    return (
        // <AppContext.Provider value={{ ImgViewerContext, setImgViewerContext }}>
        <AppContext.Provider value={{ displayImgViewer, setDisplayImgViewer, 
                                        imgURL, setImgURL, 
                                        pdfURL, setPdfURL, 
                                        spotifyURL, setSpotifyURL, 
                                        videoURL, setVideoURL, 
                                        VSURL, setVSURL, 
                                        showApplications, setShowApplications, 
                                        bgURL, setBgURL,
                                        zIndex, setZIndex
                                    }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
