import {useState, useEffect} from "react";
export default function digital (){
    const [clock,setClock] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        setInterval(()=>{
            setClock(new Date().toLocaleTimeString());
            },1000)})
            return (
                <div>
                    <h1>{clock}</h1>
                </div>
            )
}


