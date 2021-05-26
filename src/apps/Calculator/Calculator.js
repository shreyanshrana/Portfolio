import React from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';

export const Calculator = () => {

    let a = (
        <iframe title="calculator" src={"https://web2.0calc.com/widgets/18c9b111ba6d/"} width="100%" height="100%" className="m-auto"></iframe>
    )

    return (
        <AppContainer app={a} appName="Calculator"/>
    )
}
