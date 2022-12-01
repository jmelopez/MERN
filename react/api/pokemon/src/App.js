import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        return res.json()
      })
      .then(res => {
        setPokemon(res.results)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);  
  return (
    <div className="App">
      <ul style={{listStyleType: 'none'}}>
        {
          pokemon.map((poke, index)=>{
            return (<li key={index}>{poke.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
