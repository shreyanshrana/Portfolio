import React, { useContext } from 'react'
import AppContainer from '../../components/AppContainer/AppContainer'
import { AppContext } from '../../context/AppContext'

export const VSCode = () => {

    const {VSURL} = useContext(AppContext);

    let a = (
        <iframe src={VSURL} width="100%" height="100%" className="" title="PreviewWidget" allow="encrypted-media"/>
    )
    return (
        <AppContainer app={a} appName="Visual Studio Code"/>
    )
}
