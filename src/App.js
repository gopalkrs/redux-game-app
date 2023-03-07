import React from 'react';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/games/:gameid' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
