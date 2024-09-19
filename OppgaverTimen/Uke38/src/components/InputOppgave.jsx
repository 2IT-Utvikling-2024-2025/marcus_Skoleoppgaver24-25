import React, { useState } from 'react';
import './InputOppgaver.css';

const Survey = () => {

  const [name, setName] = useState('');
  const [favoriteSubject, setFavoriteSubject] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [time, setTime] = useState('12:00');
  const [date, setDate] = useState('2023-03-01');
  const [number, setNumber] = useState(0);
  const [text, SetText] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [complaint, setComplaint] = useState(''); 

  const handleNameChange = (e) => setName(e.target.value);
  const handleFavoriteSubjectChange = (e) => setFavoriteSubject(e.target.value);
  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleTextChange = (e) => SetText(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAdresseChange = (e) => setAdresse(e.target.value);
  const handleComplaintChange = (e) => setComplaint(e.target.value);


  return (
    <div className="survey-container">
      <h1 className="survey-title">Undersøkelse</h1>
      <form className="survey-form">


        <div className="Navn">
          <label className="survey-label">Hva er ditt navn?</label>
          <input type="text" value={name} onChange={handleNameChange} className="survey-input" />
        </div>


        <div className="FavorittFag">
          <label className="survey-label">Hva er favoritt faget ditt?</label>
          <select value={favoriteSubject} onChange={handleFavoriteSubjectChange} className="survey-select">
            <option value="">Velg ett alternativ</option>
            <option value="driftstøtte">Driftstøtte</option>
            <option value="bruker støtte">Bruker støtte</option>
            <option value="utvikling">Utvikling</option>
          </select>
        </div>


        <div className="Kortnummen">
          <label className="survey-label">Hva er kortnummeret ditt?</label>
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} className="survey-input" />
        </div>


        <div className="FavFarge">
          <label className="survey-label">Hva er din favorittfarge?</label>
          <input type="color" value={color} onChange={handleColorChange} className="survey-color" />
        </div>


        <div className="FavTid">
          <label className="survey-label">Hva er din favoritttid?</label>
          <input type="time" value={time} onChange={handleTimeChange} className="survey-input" />
        </div>


        <div className="FavDato">
          <label className="survey-label">Hva er din favorittdato?</label>
          <input type="date" value={date} onChange={handleDateChange} className="survey-input" />
        </div>


        <div className="FavTall">
          <label className="survey-label">Hva er din favoritttall?</label>
          <input type="number" value={number} onChange={handleNumberChange} className="survey-input" />
        </div>



        <div className="Epost">
          <label className="survey-label">Hva er din e-postadresse?</label>
          <input type="email" value={email} onChange={handleEmailChange} className="survey-input" />
        </div>


        <div className="Adresse">
          <label className="survey-label">Hva er din adresse?</label>
          <input type="text" value={adresse} onChange={handleAdresseChange} className="survey-input" />
        </div>

        <div className="Klage">
          <label className="survey-label">Har du noen klager?</label>
          <textarea value={complaint} onChange={handleComplaintChange} className="survey-textarea" placeholder="Skriv inn din klage her..."></textarea>
        </div>


        <button type="submit" className="survey-button">Send inn</button>
      </form>
    </div>
  );
};


export default Survey;