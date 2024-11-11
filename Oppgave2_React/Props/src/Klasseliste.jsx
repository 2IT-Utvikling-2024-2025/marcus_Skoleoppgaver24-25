import { useState } from "react";
import "./Klasseliste.css";

export default function Klasse() {
  const [elever, setElever] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGrade, setNewStudentGrade] = useState("");
  const [draggedStudentIndex, setDraggedStudentIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedStudentIndex(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggedStudentIndex === null) return;

    const updatedElever = [...elever];
    const draggedStudent = updatedElever[draggedStudentIndex];
    updatedElever[draggedStudentIndex] = updatedElever[index];
    updatedElever[index] = draggedStudent;

    setElever(updatedElever);
    setDraggedStudentIndex(null);
  };

  const addStudent = () => {
    if (newStudentName.trim() === "" || newStudentGrade.trim() === "") {
      alert("Skriv inn navn OG karakter.");
      return;
    }

    const newId = elever.length + 1;
    const newStudent = {
      id: String(newId),
      elev: newStudentName.trim(),
      grade: newStudentGrade.trim()
    };
    setElever([...elever, newStudent]);
    setNewStudentName("");
    setNewStudentGrade("");
  };

  const removeStudent = () => {
    if (elever.length > 0) {
      setElever(elever.slice(0, -1));
    }
  };

  const groupedElever = [];
  for (let i = 0; i < elever.length; i += 2) {
    groupedElever.push(elever.slice(i, i + 2));
  }

  const tasks = [
    "Lever inn Norsk oppgaven",
    "Forbered presentasjoner til samfunnsfag",
    "Fullfør matteoppgaver",
    "Les kapittel 4 i norskboken"
  ];

  return (
    <div className="klasse-wrapper">
      <h1>Klasseliste</h1>
      <div className="content-container">
        <div className="klasse-container">
          {groupedElever.map((pair, index) => (
            <div
              key={index}
              draggable
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className="elev-boks"
            >
              {pair.map((student, idx) => (
                <p
                  key={student.id}
                  className="elev"
                  draggable
                  onDragStart={() => handleDragStart(index * 2 + idx)}
                >
                  {student.elev} - Karakter: {student.grade}
                </p>
              ))}
            </div>
          ))}
        </div>

        {}
        <div className="task-container">
          <h2>Dagens Oppgaver</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Skriv inn elevens navn"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skriv inn elevens karakter"
          value={newStudentGrade}
          onChange={(e) => setNewStudentGrade(e.target.value)}
        />
        <button onClick={addStudent}>Legg til Elev</button>
        <button onClick={removeStudent}>Fjern Elev</button>
      </div>
    </div>
  );
}
