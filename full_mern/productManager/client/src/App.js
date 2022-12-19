
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Main from './views/Main'
import { useState } from 'react';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route element ={ <Main/> } path='/product/' default />
        <Route element={ <Detail/> } path='/product/:id' />
        <Route element={ <Update/> } path='/product/edit/:id' />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
