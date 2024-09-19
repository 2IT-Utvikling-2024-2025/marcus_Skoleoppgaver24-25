import './textfield.css'
import { useState } from 'react'

export default function TextField() {

    const [InputContent, setInputContent] = useState('')

        function handleChange(e) {

            setInputContent(e.target.value)
            console.log(e.target.value)

        }
    return (
        <>
          <div className="Container">

                <div className="section">

                <div className="question">
                    <h1> Hva er adressen til Drømtorp VGS? </h1>
                </div>

                <div className="answer">
                    <label>
                        <input 
                        className="myInput" 
                        onChange={handleChange}/>
                        
                    </label>
                </div>

            </div>


          </div>

        </>
    )
}