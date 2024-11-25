
import React, { useState } from "react";

export default function ClassListCreate() {
    const [name, setName] = useState('');
    const [studenter, setStudenter] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const studentData = {
            name: name,
        };

        try {
            const response = await fetch('http://localhost:3000/api/v1/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studentData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Klasse oprettet:', result);
            } else {
                const error = await response.json();
                console.error('Feil ved opprettelse av Klasse:', error);
            }
        } catch (error) {
            console.error('Feil ved opprettelse av Klasse:', error);
        }
    }

    return (
        <div>
            <h1>Klasse Create</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Studenter:</label>
                    <input
                        type="number"
                        value={studenter}
                        onChange={(event) => setStudenter(event.target.value)}
                        required
                    />
                </div>
                <button type="submit">Opprett Klasse</button>
            </form>
        </div>
    );
}
