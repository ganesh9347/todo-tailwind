import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTasks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;





/* 
import React from 'react';
import Example from './components/Example.jsx';
import './index.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App; */