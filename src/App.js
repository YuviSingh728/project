import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './Project/Login'
import Register from './Project/Register'
import Home from './Project/Home'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App