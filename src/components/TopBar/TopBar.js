import React from 'react'

export const TopBar = (props) => {
    return (
        <div className="bg-black text-white font-bold text-center px-2 py-1 handle" style={{ borderTopLeftRadius:'10px',  borderTopRightRadius:'10px'  }}>
            {props.title}
            <div className="float-right text-right space-x-2 text-white">
                <ion-icon name="remove-outline" style={{ color:"white", borderRadius:"50%" }}></ion-icon>
                <ion-icon name="stop-outline" style={{ color:"white", borderRadius:"50%" }}></ion-icon>
                <ion-icon name="close-outline" style={{ color:"white", backgroundColor:"#E95420", borderRadius:"50%" }}></ion-icon>
            </div>
        </div>
    )
}
