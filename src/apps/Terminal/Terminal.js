import React, { useState } from 'react'
import AppContainer from '../../components/AppContainer/AppContainer'
import DirectoryPath from "../DirectoryPath.json"
export const Terminal = () => {
    
    const [currDir, setCurrDir] = useState(DirectoryPath);
    const [displayCurrDir, setDisplayCurrDir] = useState("~/");
    // console.log(currDir);
    const [cmd, setCmd] = useState("");
    const onEnter = (e) => {
        let a = document.createElement("div")
        a.classList.add("terminalOutput")
        
        if(e.key === "ArrowUp"){
            document.getElementById("terminalInput").value = cmd;
        }
        if(e.key === "ArrowDown"){
            document.getElementById("terminalInput").value = "";
        }
        if(e.key === "Enter")
        {
            let label = document.createElement("label");
            let input = document.createElement("input");
            input.classList.add("bg-black");
            input.classList.add("mx-1");
            input.classList.add("text-white");
            input.classList.add("p-1");
            input.classList.add("focus:outline-none");
            input.classList.add("terminalOutput");
            input.value = cmd;
            input.disabled = true;        
            label.innerHTML = "shreyansh@potato-pc " + displayCurrDir + " > ";
            label.classList.add("terminalOutput");
            document.getElementById("terminalLabel").before(label)
            document.getElementById("terminalLabel").before(input);
            document.getElementById("terminalLabel").before(a);
            document.getElementById("terminalInput").value = "";
            // document.getElementById("terminalWidget").(a)
            let i = 0;
            for(let a  in cmd){
                i++;
                if(cmd[a] === " ")
                    break;
            }
            let command = "";
            let param =  "";
            if(i !== cmd.length){
                command = cmd.substr(0,i-1);
                param = cmd.substr(i,cmd.length-1);
            }
            else{
                command = cmd.substr(0,i);
            }
            // console.log(command);
            // console.log(param);
            // console.log(currDir);
            // console.log(DirectoryPath);
            switch(command){
                case 'sudo':
                    a.classList.add("text-blue-500");
                    a.innerHTML = "(¬‿¬) someone wants admin privileges... <br/> sadly IMMA SAY NO ~(˘▾˘~)";
                    break;
                case 'su':
                    a.classList.add("text-blue-500");
                    a.innerHTML = "(¬‿¬) someone wants admin privileges... <br/> sadly IMMA SAY NO ~(˘▾˘~)";
                    break;
                case 'clear':
                    Array.from(document.getElementsByClassName("terminalOutput")).map(e => {
                        e.remove();
                        return null;
                    });
                    Array.from(document.getElementsByClassName("terminalInput")).map(e => {
                        e.remove();
                        return null;
                    });
                    break;
                case 'ls':
                    a.classList.add("text-yellow-500");
                    for(let k in currDir){
                        a.innerHTML += k + " "; 
                    }
                    // a.innerHTML = ""
                    break;
                case 'echo':
                    a.classList.add("text-white");
                    a.innerHTML = param;
                    break;
                case 'cd':
                    if(currDir[param]){
                        setCurrDir(currDir[param]);
                        setDisplayCurrDir("~/"+ param);
                    }
                    else if(param === "../" && JSON.stringify(currDir) !== JSON.stringify(DirectoryPath)){
                        setCurrDir(DirectoryPath);
                        setDisplayCurrDir("~/");
                    }
                    else{
                        a.classList.add("text-red-500");     
                        a.innerHTML = "Directory doesnt exist";
                    }
                    break;
                default:
                    a.innerHTML += "Invalid command, available commands : clear, ls, echo, cd :)"
            }
        }
    document.getElementById("terminalInput").focus();
        // document.getElementById("terminalInput").scrollTo = document.getElementById("terminalInput").scrollHeight;
}

let a = (
    <div id="" className="w-full bg-black h-full text-green-600 font-bold z-50" onClick={()=>{document.getElementById("terminalInput").focus()}}>
        <label id="terminalLabel">shreyansh@potato-pc <p className="text-white inline-block">{displayCurrDir}</p> > </label> 
        <input id="terminalInput" className="bg-black mx-1 text-white p-1 focus:outline-none" placeholder="|" onKeyUp={(e)=>onEnter(e)} onChange={(e)=>{setCmd(e.target.value)}}/>
    </div>
)
    return (
        <AppContainer app={a} appName="Terminal"/>
    )
}
