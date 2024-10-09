import { useState } from "react"

export default function Usa(){
    const [nok, setNok] = useState(0)
    const [usd, setUsd] = useState(0)

    function handleInputChange()  {
        setUsd(nok * 10.76)
    
    
    }
    return(
        <>
            <h1>USA konverter</h1>

            <input 
            type="number" 
            placeholder="Skriv inn et tall"
            value={nok}
             onChange={(e) => setNok(e.target.value)}
             />
            <p>NOK Verdi</p>
            <button onClick={handleInputChange}>Konverter</button>
    
            <h1>{usd} </h1>
            <p>USD verdi</p>
        </>
    )
}