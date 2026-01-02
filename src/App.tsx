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
        <Route path='/my-website/' element={<Home />}/>
        <Route path='/my-website/Studies' element={<Studies />}/>
        <Route path='/my-website/Sports' element={<Sports />}/>
        <Route path='/my-website/Music' element={<Music />}/>
        <Route path='/my-website/Contact' element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App