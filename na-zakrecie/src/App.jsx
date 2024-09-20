import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import NaZakrecie from "./pages/NaZakrecie"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nazakrecie" element={<NaZakrecie />} />
        <Route path="/nadrzeczka" element={<h1>Nad Rzeczka</h1>} />
        <Route path="/about" element={<h1>About us</h1>} />
      </Routes>
    </BrowserRouter>
  )
}