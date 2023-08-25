import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Info } from './pages/info/Info'
import { ToastContainer } from 'react-toastify'
import { Menu } from './components/menu/Menu'
import { Sets } from './components/sets/Sets'
import { Error } from './pages/error/Error'
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/info' element={<Info />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/ouca' element={<Sets />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
