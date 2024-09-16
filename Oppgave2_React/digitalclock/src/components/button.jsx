  import { useState } from 'react'
  import './css/button.css'
  export default function MyButton() {
   const [X, setX] = useState(0)
     return (
       <button className="buttonstyle" onClick={click}>{X}</button>
     );
 
     function click(){
      setX(X + Math.floor(Math.random() * 10) + 1)
      myTic(X)
    }
    
    function myTic(num) {
      if (num === 22){
        console.log("Jackpot")
      } else {
        console.log("try again")
      }
     }
   }

    
   