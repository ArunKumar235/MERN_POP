import Home from './components/FunctionalComponent/Home.jsx'
import About from './components/FunctionalComponent/About.jsx'
import Contact from './components/FunctionalComponent/Contact.jsx'  
import Gallery from './components/FunctionalComponent/Gallery.jsx'
import Signup from './components/FunctionalComponent/Signup.jsx'
import Navbar from './components/FunctionalComponent/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UseEffect from './components/FunctionalComponent/Hooks/UseEffect.jsx'
import Login from './components/FunctionalComponent/Login.jsx'
import UseEffectAPI from './components/FunctionalComponent/Hooks/UseEffectAPI.jsx'
import UseRef from './components/FunctionalComponent/Hooks/UseRef.jsx'
import UseMemo from './components/FunctionalComponent/Hooks/UseMemo.jsx'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home message="Hi" />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/use-effect' element={<UseEffect />}/>
          <Route path='/use-effect-api' element={<UseEffectAPI />}/>
          <Route path='/use-ref' element={<UseRef />}/>
          <Route path='/use-memo' element={<UseMemo/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
