import { useState } from 'react'
import './App.css'
import React, { Component } from "react";


  
function App() {

  return (
    <>
    <div className="Planleggning">
      <h1>Planleggning</h1>
      <p>Navn på PC-en: 2ITA19. Navn på brukeren: marcus</p>
      <p> Jeg skal patisjonere disken min i 60/160 60 av dem vil tilhøre windows</p>
      <p>IP: 192.168.1.40 -59 og jeg brukte 192.168.1.57 </p>
      <p>så skal jeg se rundt på hvordan andre jobber for å få en bedre forstårlese over windows.</p>
    </div>
        <div className='Starten'>
        <h1>Start Prosess</h1>
        <p>det hele startet med å velge en pc, sefølgelig valget jeg 19</p>
        <p>selvom 19 var litt skitten, men jeg hadde jeg full tro på den</p>
        <p>etterhvert hørte jeg bare klage rundt meg hele tiden, selvom jeg klagde litt å</p>
       </div>
      <div className='Begynnelsen'>
        <h1>Begynnelsen</h1>
        <p>Jeg bestemte meg for å søke på nettet etter hvordan man skulle gjøre det. </p>
        <p>Etter litt research fant jeg ut at jeg måtte holde inne shift-knappen mens jeg restartet PC-en. Da kom jeg til et program jeg har sett før, men ikke er så kjent med. Jeg begynte å lete etter videoer som forklarte hvordan man installerer Windows steg for steg. Selv om jeg prøvde mitt beste og fulgte instruksjonene nøye, må jeg være ærlig – </p>
        <p>jeg klarte det ikke helt på egen hånd.</p>
      </div>
      <div className='Forsetteslen'>
        <h1>Forsetteslen</h1>
        <p>Jeg var heldig å få hjelp av noen medelever som ga meg en bedre forståelse av Windows.</p>
        <p> Etter mange forsøk kom Kevin med en minnepinne som hadde alt jeg trengte. Etter litt venting og hjelp fra Kevin, fikk jeg endelig installert Windows.</p>
        <p> Nedlastingen tok tid, og jeg måtte svare på flere unødvendige spørsmål underveis. Da jeg endelig kom inn, var både jeg og Woonjong utålmodige, så vi gikk rett videre til neste oppgave.</p>
      </div>
      <div className='Ping Oppgaven'>
        <h1>Ping Oppgaven</h1>
        <p>For å sjekke forbindelsen mellom PC-ene, åpner du et kommandovindu (Windows + R, skriv cmd) og bruker ping-kommandoen: ping etterfulgt av IP-adressen til den andre PC-en (f.eks. ping 192.168.1.2). Hvis du ikke får svar, kan brannmuren blokkere trafikken. <p>
        For å åpne for ping, gå til Windows Defender Firewall med avansert sikkerhet, velg "Innkommende regler", og aktiver regelen "File and Printer Sharing (Echo Request – ICMPv4-In)". Dette lar ping-trafikk slippe gjennom brannmuren.</p>
        Når du får svar fra den andre PC-en, kan du blokkere ping igjen ved å deaktivere den samme regelen. Deretter tester du på nytt med ping for å bekrefte at trafikken er blokkert.</p>
      </div>
        <div className='Filezilla'>
          <h1>Filezilla/Åpne brannmuren/Lage ny regel</h1>
          <p>For å åpne eller sperre brannmuren for FTP-trafikk og sette opp et FTP-produkt som FileZilla, følger du disse trinnene. Last ned FileZilla fra den offisielle nettsiden, og installer FileZilla Server på server-PC-en og FileZilla Client på klient-PC-en. Åpne FileZilla Server, gå til "Edit" → "Settings", og spesifiser port 21 (standard FTP-port). Deretter legger du til brukernavn og passord under "Users". På klient-PC-en starter du FileZilla Client, oppgir serverens IP-adresse, brukernavn, passord og portnummer, og kobler til for å teste filoverføringen.</p>
           <p> For å åpne brannmuren, åpne "Windows Defender Firewall med avansert sikkerhet", gå til "Innkommende regler", og lag en ny regel. Velg "Port" og skriv inn 21. Velg "Tillat tilkobling" for å åpne brannmuren, eller "Blokker tilkoblingen" for å sperre trafikken. Gi regelen et navn, for eksempel "FTP-regel".</p>
            <p>Til slutt tester du overføring ved å koble til med FileZilla Client. Last opp eller ned en fil for å verifisere at tilkoblingen fungerer. Deretter kan du sperre port 21 i brannmuren og prøve igjen for å sjekke at trafikken blir blokkert. Når porten åpnes igjen, skal overføringen fungere som normalt. Dette lar deg kontrollere FTP-trafikken mellom PC-ene i nettverket.</p>
        </div>
        <div className='Slutt spørsmål'>
          <h1>Slutt Spørsmål</h1>
          <h2>Hva har du lært gjennom denne oppgaven?</h2>
          <p>Jeg har lært meg å åpne en ny regler ved brannmuren.</p>
          <p>Jeg har også lært meg hvordan jeg kan åpne en port ved brannmuren.</p>
          <p>Jeg har lært meg å sende over en fil via Fillazilla.</p>
          <p>Jeg har lært meg å pinge via terminalen etter man har åpnet brannmuren.</p>
          <h2>Hvordan har din innsats og fokus vært?</h2>
          <p>Jeg ville sagt at mitt fokus har vært å topp selvom jeg får hjelp eller ikke.</p>
          <p>Innsatsen min har vært veldig bra, jeg har stått på med å hjelpe andre og gjøre oppgaven selv.</p>
          <h2>Om du skal utføre oppgaven en gang til, er det noe du ville gjort annerledes?</h2>
          <p>Jeg ville kanskje sett litt mer på youtube, jeg hadde også kanskje begynt å dokumentere helt fra begynnelsen, ikke begynne midt i.</p>
        </div>
      
    </>
  )
}


export default App
