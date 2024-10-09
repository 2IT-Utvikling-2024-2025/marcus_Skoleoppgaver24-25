import { useState } from 'react'

function Vær(){
    const[land,Setland] = useState()
    const[celsius,Setcelsius] =  useState()
    
    function Celcsius(){
        const apikey ='5b360eaaa8551c25679a4010e124b713';
        const url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API%20key}'
        
        fetch(url)
        .then((respone) => respone.json)
        .then((data) => {
            let MT = Math.round(data.main.temp)
            let FT = Math.round(data.Føles_Som)

            const vær =  {
                sted:`været i ${data.name}`,
                tempratur:`tempratur: ${MT} C`,
                følesUtSom: `følesUtSom: ${FT}C`,
                fuktighet: `fuktighet: ${data.main.fuktighet} %`,
                vind: `vind: ${data.vind.hastighet} km/H`,
                betingelse: `været betingelse: ${s}`
            }

        })
    }
    
    return(
        <div className="Celcsius-container">
            <input 
            type="text"
            placeholder="Skriv inn land"
            value={land}
            onChange={(e) => Setland(e.target.value)}
            />
            <button onClick={Celcsius}>Få celcsius</button>
            {celsius &&(
                <div className="Info">
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            )}
        </div>
    );
} 
export default Vær