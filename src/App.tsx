import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/Login/Login'
import Home from './Components/Pages/Home/Home'
import Description from './Components/Pages/Description/description'
import Favotites from './Components/Pages/Favorites/favorites'
import Welcome from './Components/Pages/Welcome/Welcome'

const App = () => {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/favorites" element={<Favotites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/description" element={<Description />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
