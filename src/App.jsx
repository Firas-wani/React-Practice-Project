import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact'
import User from './components/User';
import Github from './components/Github';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/header"  element={<Header/>} />
<Route path="/"  element={<Home/>} />
<Route path="/footer"  element={<Footer/>} />
<Route path="/about"  element={<About/>} />
<Route path="/contact"  element={<Contact/>} />
<Route path='/user/:userid' element={<User/>} />

<Route path="/github" element={<Github/>}      />


     </Routes>
     
     
     
     < Footer/>
   
     
     
     </BrowserRouter>
     
    </>
  )
}

export default App
