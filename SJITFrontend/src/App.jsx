import Home from './components/FunctionalComponent/Home.jsx'
import About from './components/FunctionalComponent/About.jsx'
import Contact from './components/FunctionalComponent/Contact.jsx'  
import Gallery from './components/FunctionalComponent/Gallery.jsx'
import Signup from './components/FunctionalComponent/Signup.jsx'
import Navbar from './components/FunctionalComponent/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UseEffect from './components/FunctionalComponent/Hooks/useEffect.jsx'

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
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
