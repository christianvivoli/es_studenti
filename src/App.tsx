import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

const dati = [
  {nome: "christian",anni:"19",sesso:"maschio"},
  {nome: "alessio",anni:"19",sesso:"maschio"},
  {nome: "alessandro",anni:"19",sesso:"maschio"},
]

function App() {
  const [studenti, setStudenti] =useState(dati);
  const [showform, setShowForm] =useState(false);

  const [name, setName] =useState("");
  const [age, setAge] =useState("");
  const [gender, setGender] =useState("");

  function elimina(el:string){
    setStudenti(studenti.filter(obj => obj.nome !== el));
  }

  function aggiungi(){
    let newStudents = studenti;
    newStudents.push(nome: name, anni: parseInt(age), sesso: gender);

    setStudenti(newStudents);
  }

  function modifica(){
    if(showform==true){
      setShowForm(false);
    }else{
      setShowForm(true);
    }
  }

  return (
    <div className='App'>
      <center>
      <table className='colore spazio bordo'>
        <tr>
          <th>Nome</th>
          <th>Anni</th>
          <th>Sesso</th>
          <th>Azione</th>
        </tr>
        {studenti.map((studenti,key)=>{
          return(
          <tr key={key}>
            <th>{studenti.nome}</th>
            <th>{studenti.anni}</th>
            <th>{studenti.sesso}</th>
            <th><button onClick={() => elimina(studenti.nome)} className='bottone'>elimina</button></th>
          </tr>
          )
        })}
      </table>
      <button onClick={() =>modifica()}>inserisci</button>
        {showform && 
          <form>
            <p>nome</p>
            <input type="text" name="nome" id="nome" onChange={(e) => setName(e.target.value)}/>
            <p>anni</p>
            <input type="number" name="nome" id="anni" onChange={(e) => setAge(e.target.value)}/>
            <p>sesso</p>
            <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
              <option value="">nussun sesso</option>
              <option value="maschio">maschio</option>
              <option value="femmina">femmina</option>
            </select>
            <p></p>
            <button onClick={() => aggiungi()}>salva</button>
          </form>

        }
      </center>
    </div>
  );
}

export default App;
