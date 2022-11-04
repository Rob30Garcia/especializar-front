import { useState } from 'react';
import { Card } from '../../components/Card';

import './style.css';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudent] = useState([]);

  const handleAddStudent = () => {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudent(prevState => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <h1>Lista da presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button
        type="button"
        onClick={handleAddStudent}
      >
        Adicionar
      </button>

      {
        students.map((student => <Card key={student.time} name={student.name} time={student.time} />))
      }

    </div>
  )
}
