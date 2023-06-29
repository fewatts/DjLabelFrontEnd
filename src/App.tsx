import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Info } from './pages/info/Info'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
