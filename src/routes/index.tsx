import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Home, Login, Register } from '../pages'

export default function Navigate() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </Router>
  )
}
