import React, { useContext } from 'react'
import Draggable from 'react-draggable';
import { TopBar } from '../../components/TopBar/TopBar';
import { AppContext } from '../../context/AppContext';

export const SpotifyViewer = () => {
    const {spotifyURL, setSpotifyURL} = useContext(AppContext);
    // console.log(spotifyURL);
    const changeActivePlaylist = (id) => {
        document.getElementById("s"+id).style.fontWeight = "bold";
        document.getElementById("s"+id).style.backgroundColor = "#8B5CF6";
        document.querySelectorAll(".spotify-playlist:not(#s" + id + ")").forEach(button => {button.style.fontWeight = "100"; button.style.backgroundColor = "#4C1D95"; return null;})
    }
    return (
        <Draggable
                axis="both"
                handle=".handle"
                grid={[1,1]}
                bounds="parent">
                <div id="spotifyContainer"
                        style={{ 
                            // height : window.getComputedStyle(document.getElementById("WindowSpace")).height.substr(0,3) - 28 + 'px',
                            height : "500px",
                            width : "700px",
                            display : "block",
                            left:"0",
                            top:"1.75rem",
                            zIndex:"25"
                        }} 
                        className="absolute bg-white inline-block">
                    <TopBar title="Spotify" frameTitle="spotify"/>
                        <div id="PreviewWidget" className="w-full fixed bg-purple-900 z-50 top-8 left-0" style={{ height:"95%" }}>
                            <div className="w-1/6 inline-block float-left space-y-2" id="Spotify-Menu">
                                <h1 className="font-bold text-white py-3 px-2" style={{ borderBottom:"1px solid white" }}>Playlists</h1>
                                <button id="s3AGIYCxTLf33EYmTLI3tgM" onClick={()=>{setSpotifyURL("https://open.spotify.com/embed/playlist/3AGIYCxTLf33EYmTLI3tgM"); changeActivePlaylist("3AGIYCxTLf33EYmTLI3tgM")}} className=" spotify-playlist transition p-2 block text-left text-sm text-gray-100 hover:bg-purple-700 w-full">Poppy</button>
                                <button id="s3dMmPVKe2qQ3eVMKBZmZiY" onClick={()=>{setSpotifyURL("https://open.spotify.com/embed/playlist/3dMmPVKe2qQ3eVMKBZmZiY"); changeActivePlaylist("3dMmPVKe2qQ3eVMKBZmZiY")}} className=" spotify-playlist transition p-2 block text-left text-sm text-gray-100 hover:bg-purple-700 w-full">Animeeeee</button>
                                <button id="s68IIT4nHtPftskRP6bq7vP" onClick={()=>{setSpotifyURL("https://open.spotify.com/embed/playlist/68IIT4nHtPftskRP6bq7vP"); changeActivePlaylist("68IIT4nHtPftskRP6bq7vP")}} className=" spotify-playlist transition p-2 block text-left text-sm text-gray-100 hover:bg-purple-700 w-full">Latin Luv</button>
                                <button id="s6zYcVunMlPPb8Yy172QCCA" onClick={()=>{setSpotifyURL("https://open.spotify.com/embed/playlist/6zYcVunMlPPb8Yy172QCCA"); changeActivePlaylist("6zYcVunMlPPb8Yy172QCCA")}} className=" spotify-playlist transition p-2 block text-left text-sm text-gray-100 hover:bg-purple-700 w-full">kPop</button>
                                <button id="s4MDNuoYAmbklM4FvKSxNty" onClick={()=>{setSpotifyURL("https://open.spotify.com/embed/playlist/4MDNuoYAmbklM4FvKSxNty"); changeActivePlaylist("4MDNuoYAmbklM4FvKSxNty")}} className=" spotify-playlist transition p-2 block text-left text-sm text-gray-100 hover:bg-purple-700 w-full">EDM Timez</button>
                                <button id="s5pvRx25Iw1HLb8TleuKJbO" onClick={()=>{setSpotifyURL("https://open.spotify.com/embed/playlist/5pvRx25Iw1HLb8TleuKJbO"); changeActivePlaylist("5pvRx25Iw1HLb8TleuKJbO")}} className=" spotify-playlist transition p-2 block text-left text-sm text-gray-100 hover:bg-purple-700 w-full">creme de la creme</button>
                            </div>
                            <iframe src={spotifyURL} width="83.3333%" height="100%" className="" title="PreviewWidget" allow="encrypted-media"/>
                        </div>
                    </div>
        </Draggable>
    )
}
