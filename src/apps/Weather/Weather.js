import React from 'react'
import AppContainer from '../../components/AppContainer/AppContainer'

export const Weather = () => {

    let a = (
        <iframe title="weather" src={"https://www.theweather.com/getwid/5d148ef8e641649e190058616032ebde/"} width="100%" height="100%" className="m-auto"></iframe>
    )
    return (
        <AppContainer app={a} appName="Weather" showMax={false}/>
    )
}
