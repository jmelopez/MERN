import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Detail from './components/Detail';
import axios from 'axios';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element = { <Main/> } path= '/home' default />
          <Route element = { <Detail/> } path = '/people/:id' />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
