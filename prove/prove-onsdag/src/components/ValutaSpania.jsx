import { useState } from 'react'

export default function Spania(){
const [nok, setNok] = useState('0')
const [eur, setEur] = useState('0')


function handleInputChange()  {
    setEur(nok * 11.79)


}

    return (
        
        <div className='Spania'>
            <h1>Spansk koonverterer</h1>
            <input 
            type="number" 
            placeholder="Skriv inn et tall"
            value={nok}
            onChange={(e) => setNok(e.target.value)}
            />
            <p>NOK Verdi</p>
            <button onClick={handleInputChange}>Konverter</button>
    
            <h1>{eur} </h1>
            <p>EUR verdi</p>


         </div>
       )

}