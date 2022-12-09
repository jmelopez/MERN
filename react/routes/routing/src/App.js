import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Params from './components/Params';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:word" element={< Params />} />
        <Route path="/:word/:text/:background" element={ < Params />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
