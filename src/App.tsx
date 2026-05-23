import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tools from './pages/Tools'
import Resources from './pages/Resources'
import Premium from './pages/Premium'
import Consulting from './pages/Consulting'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/consulting" element={<Consulting />} />
      </Routes>
    </HashRouter>
  )
}
