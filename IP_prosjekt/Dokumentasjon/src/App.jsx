import { useState } from 'react'
import './App.css'
import React, { Component } from "react";


  
function App() {

  return (
    <>
    <div className="Planleggning">
      <h1>Planleggning</h1>
      <p> PC-navn: 2ITA19</p>
      <p>Brukernavn: Marcus</p>
      <p>Jeg planlegger å partisjonere disken min i to deler: 60 GB til Windows og 160 GB til annen bruk.</p>
      <p>IP-adresse: 192.168.1.40 - 59 (jeg har brukt 192.168.1.57).</p>
      <p>Jeg vil også undersøke hvordan andre jobber med Windows for å få en bedre forståelse av operativsystemet.</p>
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
        <h1>Installasjon av Windows</h1>
        <p>For å installere Windows på en ny PC, begynner du med å slette den eksisterende installasjonen uten å logge inn. Trykk og hold Shift-tasten, klikk på Start, og velg Restart. I det blå reparasjonsvinduet, velg Troubleshoot, deretter Reset this PC, og velg Remove everything. Bekreft og la PC-en fullføre prosessen.</p>
        <p>Lag et nytt installasjonsmedium ved å bruke Rufus. Last ned og åpne Rufus, sett inn en USB-minnepinne det bør minst være 8GB på den, velg Windows ISO-filen under "Boot selection", og klikk Start for å opprette en oppstartbar USB-minnepinne.
          Sett USB-minnepinnen inn i den nye PC-en, start PC-en, og gå til BIOS/UEFI for å sette USB-enheten som første oppstartsenhet. Lagre endringene og start på nytt.</p>
        <p> Når PC-en starter fra USB-en, følg installasjonsveiviseren: velg språk, tidssone, og tastaturoppsett, klikk på Install now, skriv inn produktnøkkel hvis nødvendig, og velg en ren installasjon. Velg disken for installasjonen og klikk Next.</p>
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
