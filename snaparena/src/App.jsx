import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Portrait from './pages/Portrait'
import Sports from './pages/Sports'
import Wildlife from './pages/Wildlife'
import Video from './pages/Video'
import Portfolio from './pages/Portfolio'
import Photo from './pages/Photo'
import Landscape from './pages/Landscape'
import Gallery from './pages/Gallery'
import Event from './pages/Event'
import Contact from './pages/Contact'
import Archi from './pages/Archi'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import _404 from './pages/_404'

function App() {

  return (
    <>

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portrait" element={<Portrait />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route exact path="/wildlife" element={<Wildlife />} />
        <Route exact path="/video" element={<Video />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/photo" element={<Photo />} />
        <Route exact path="/landscape" element={<Landscape />} />
        <Route exact path="gallery" element={<Gallery />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/archi" element={<Archi />} />
        <Route path="*" element={<_404 />} />
      </Routes>
      <Footer />
    </Router>

    </>
  )
}

export default App
