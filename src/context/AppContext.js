import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [displayImgViewer, setDisplayImgViewer] = useState("none");
    const [imgURL, setImgURL] = useState("");
    const [pdfURL, setPdfURL] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [spotifyURL, setSpotifyURL] = useState("https://open.spotify.com/embed/playlist/3AGIYCxTLf33EYmTLI3tgM");
    return (
        // <AppContext.Provider value={{ ImgViewerContext, setImgViewerContext }}>
        <AppContext.Provider value={{ displayImgViewer, setDisplayImgViewer, imgURL, setImgURL, pdfURL, setPdfURL, spotifyURL, setSpotifyURL, videoURL, setVideoURL }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
