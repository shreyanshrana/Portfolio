import React, { useContext } from 'react'
import Draggable from 'react-draggable'
import { AppContext } from '../../context/AppContext';
import { TopBar } from '../TopBar/TopBar';

import "./AppContainer.css";


const AppContainer = (props) => {

    let showMax = (props.showMax === false) ? false : true; //show maximize button or not

    const {zIndex, setZIndex} = useContext(AppContext);

    return (
        <React.Fragment>
            <Draggable
                axis="both"
                handle="#AppContainer"
                grid={[1,1]}
                bounds="#WindowSpace">
                    <div className={props.appName} id="AppContainer" onClick={()=>{
                                                                                    document.getElementsByClassName(props.appName)[0].style.zIndex = zIndex;
                                                                                    setZIndex(zIndex + 1)
                                                                                }}>
                        <TopBar title={props.appName} showMax={showMax}/>
                        <div id="Application" className="">
                            {props.app}
                        </div>
                    </div>
            </Draggable>
        </React.Fragment>
    )
}

export default AppContainer;
