import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName = { "John" }
        lastName = { "Doe" }
        age = { 26 }
        hairColor = { "brown" } />

      <PersonCard 
        firstName = { "Eric" }
        lastName = { "Smith" }
        age = { 47 }
        hairColor = { "blonde" } />

      <PersonCard 
        firstName = { "Cammie" }
        lastName = { "Johnson" }
        hairColor = { "red" }
        age = { 31 } />
    </div>
  );
}

export default App;
