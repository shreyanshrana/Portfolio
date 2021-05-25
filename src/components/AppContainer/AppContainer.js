import React from 'react'
import Draggable from 'react-draggable'
import { TopBar } from '../TopBar/TopBar';

import "./AppContainer.css";


const AppContainer = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <Draggable
                axis="both"
                handle="#AppContainer"
                grid={[1,1]}
                bounds="#WindowSpace">
                    <div className={props.appName} id="AppContainer">
                        <TopBar title={props.appName} showMax={true}/>
                        <div id="Application" className="">
                            {props.app}
                        </div>
                    </div>
            </Draggable>
        </React.Fragment>
    )
}

export default AppContainer;
