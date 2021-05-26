import React, { useContext } from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';
import {AppContext} from '../../context/AppContext';

export const ImgViewer = () => {
    const {imgURL} = useContext(AppContext);

    let a = (
        <img src={imgURL} className="m-auto" style={{position:"relative", top:"50%", transform:"translate(0,-50%)", height:"95%"}} alt="img"/>
    )
    return (
        <AppContainer app={a} appName="Image Viewer"/>
    )
}
