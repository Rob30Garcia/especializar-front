import { useState, useEffect } from 'react';
import { Card, ICardProps } from '../../components/Card';

import './style.css';

interface IProfileResponse {
  name: string;
  avatar_url: string;
}

interface IUser {
  name: string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudent] = useState<ICardProps[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/Rob30Garcia");
      const data: IProfileResponse = await response.json();

      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista da presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

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
