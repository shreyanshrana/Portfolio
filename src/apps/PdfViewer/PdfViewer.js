import React, { useContext } from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';
import { AppContext } from '../../context/AppContext';

export const PdfViewer = () => {
    const {pdfURL} = useContext(AppContext);

    let a = (
        <iframe src={pdfURL} width="100%" height="100%" className="m-auto" title="PreviewWidget" />
    )
    return (
        <AppContainer app={a} appName="Document Viewer"/>
    )
}
