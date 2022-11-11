import Hooks from './components/Hooks';
import Forms from './components/Forms';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hooks
        item = { "Poster" }
        desc = { "Hang in there funny cat meme" }
        cost = { 5.99 }
        currentStock = { 30 } />
      <Hooks
        item = { "Alarm Clock" }
        desc = { "Multi-set alarm feature, black with multi color options for back glow." }
        cost = { 25.99 }
        currentStock = { 10 } />
      <Hooks
        item = { "Picture Frame" }
        desc = { "Rustic wood 8x10 frame." }
        cost = { 13.99 }
        currentStock = { 40 } />
      <Hooks
        item = { "Keyboard" }
        desc = { "Full size keyboard, backlit, with numpad for all your work essential needs!" }
        cost = { 36.99 }
        currentStock = { 22 } />

      <Forms />

    </div>
  );
}

export default App;
