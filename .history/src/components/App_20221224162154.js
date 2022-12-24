import React from 'react';
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home></Home>}></Route>
        <Route path='/:id' element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;