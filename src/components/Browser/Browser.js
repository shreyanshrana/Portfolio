import React from 'react'
import { useDrag } from 'react-dnd'
import { TopBar } from '../TopBar/TopBar'

export const Browser = (props) => {
    // const [{ isDragging }, drag] = useDrag(
    //     () => ({
    //       type: "browser",
    //       collect: (monitor) => ({
    //         isDragging: monitor.isDragging()
    //       })
    //     }),
    //     []
    //   )
    
    return (
        <div 
            style={{ width:props.width, borderTopLeftRadius:'10px',  borderTopRightRadius:'10px'}} >
            <TopBar title={props.title}/>
            hello
        </div>
    )
}
