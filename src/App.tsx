import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Books } from "./components/Books";
import { Navbar } from "./components/Navbar";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/books' element={<Books />} />
        <Route path='/navBar' element={<Navbar />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
      </Routes>
      <Books />
    </div>
  );
}

export default App;
