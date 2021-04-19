import React from 'react';
import "./PowerWidget.css";

export const PowerWidget = (props) => {
    let displayBool = (props.show) ? 'block' : 'none';
    return (
        <div style={{ display: displayBool}}>
             <div className="text-right p-0 mx-5 h-3" style={{ color:'#E2E0DD' }}>
                <ion-icon name="caret-up-outline" ></ion-icon>
            </div>
            <div className="w-2/12 float-right mx-1 py-4" style={{ background:'#E2E0DD', borderRadius:'5px'}}>
                <div className="p-2 px-6 space-x-3 powerWidgetItem">
                    <ion-icon name="settings-outline"></ion-icon>
                    <p className="inline-block">Settings</p>
                </div>
                <div className="p-2 px-6 space-x-3 powerWidgetItem">
                    <ion-icon name="lock-closed"></ion-icon>
                    <p className="inline-block">Lock</p>
                </div>
                <div className="p-2 px-6 space-x-3 powerWidgetItem">
                    <ion-icon name="power"></ion-icon>
                    <p className="inline-block">Power Off / Log Out</p>
                </div>
            </div>
        </div>
    )
}
