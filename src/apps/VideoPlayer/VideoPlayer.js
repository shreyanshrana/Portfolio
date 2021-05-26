import React, { useContext } from 'react'
import AppContainer from '../../components/AppContainer/AppContainer';
import { AppContext } from '../../context/AppContext';

export const VideoPlayer = () => {
    const {videoURL} = useContext(AppContext);

    let a = (
        <iframe src={videoURL} width="100%" height="100%" className="m-auto"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>
    )
    return (
            <AppContainer app={a} appName="Video Player"/>
    )
}
