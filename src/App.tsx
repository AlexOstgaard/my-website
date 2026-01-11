import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Studies from './components/Studies/Studies'
import Sports from './components/Sports/Sports'
import Music from './components/Music/Music'
import Contact from './components/Contact/Contact'


function App() {

  return (
    <BrowserRouter basename="/my-website">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/studies' element={<Studies />}/>
        <Route path='/sports' element={<Sports />}/>
        <Route path='/music' element={<Music />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App