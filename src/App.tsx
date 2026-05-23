import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Tools from './pages/Tools'
import Resources from './pages/Resources'
import Premium from './pages/Premium'
import Consulting from './pages/Consulting'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/consulting" element={<Consulting />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
