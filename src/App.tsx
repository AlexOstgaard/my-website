import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Studies from './components/Studies/Studies'
import Sports from './components/Sports/Sports'
import Music from './components/Music/Music'
import Contact from './components/Contact/Contact'



function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Studies' element={<Studies />}/>
        <Route path='/Sports' element={<Sports />}/>
        <Route path='/Music' element={<Music />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
