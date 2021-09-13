import React from 'react';
import AppContainer from '../../components/AppContainer/AppContainer';

export const Calculator = () => {

    let a = (
        <>
        <iframe title="calculator" src={"https://web2.0calc.com/widgets/c731e6a96f09/"} width="100%" height="100%" className="m-auto"></iframe>
        <a href="https://web2.0calc.com/">Web 2.0 scientific calculator</a>
        </>
    )

    return (
        <AppContainer app={a} appName="Calculator"/>
    )
}
