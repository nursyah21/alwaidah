import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pelatih from './pages/Pelatih'
import Recording from './pages/Recording'
import Berita from './pages/Berita'
import GambusModern from './pages/GambusModern'
import GambusTradisional from './pages/GambusTradisional'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes className="main">
        <Route path='/' element={<Home />} />
        <Route path='/pelatih' element={<Pelatih />} />
        <Route path='/recording' element={<Recording />} />
        <Route path='/berita' element={<Berita />} />
        <Route path='/gambus-modern' element={<GambusModern />} />
        <Route path='/gambus-tradisional' element={<GambusTradisional />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
