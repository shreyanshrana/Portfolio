import React, { useContext } from 'react'
import {  PdfViewer } from '../../apps/PdfViewer/PdfViewer';
import { FileExplorer } from '../../apps/FileExplorer/FileExplorer';
import { ImgViewer } from '../../apps/ImgViewer/ImgViewer';
import { SpotifyViewer } from '../../apps/Spotify/Spotify';
import { VideoPlayer } from '../../apps/VideoPlayer/VideoPlayer';
import { Weather } from '../../apps/Weather/Weather';
import { Calculator } from '../../apps/Calculator/Calculator';
import { Browser } from '../../apps/Browser/Browser';
import { Activities } from '../Activities/Activities';
import { VSCode } from '../../apps/VSCode/VSCode';
import { Terminal } from '../../apps/Terminal/Terminal';

import { AppContext } from '../../context/AppContext';
import Settings from '../../apps/Settings/Settings';

export const WindowSpace = (props) => {

    const {bgURL} = useContext(AppContext);
    return (
        <div id="WindowSpace" 
            className="relative h-full z-0 inline-block float-right"
            style={{width:"calc(100% - 3rem)", backgroundImage:'url(' + bgURL + ')', backgroundSize:'cover', backgroundPosition:'top'}} 
            >
            <Browser/>
            <SpotifyViewer/>
            <VSCode/>
            <Terminal/>
            <FileExplorer/>
            <PdfViewer/>
            <ImgViewer/>
            <VideoPlayer/>
            <Calculator/>
            <Weather/>
            <Settings/>
            <Activities/>
        </div>
    )
}
