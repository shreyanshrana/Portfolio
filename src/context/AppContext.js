import React, { useContext, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [displayImgViewer, setDisplayImgViewer] = useState("none");
    const [imgURL, setImgURL] = useState("");
    const [pdfURL, setPdfURL] = useState("");
    const [spotifyURL, setSpotifyURL] = useState("");
    return (
        // <AppContext.Provider value={{ ImgViewerContext, setImgViewerContext }}>
        <AppContext.Provider value={{ displayImgViewer, setDisplayImgViewer, imgURL, setImgURL, pdfURL, setPdfURL, spotifyURL, setSpotifyURL }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
