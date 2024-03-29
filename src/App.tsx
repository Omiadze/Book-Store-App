import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import Description from './Components/Pages/description'
import Favotites from './Components/Pages/favorites'
import Welcome from './Components/Pages/Welcome'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/favorites" element={<Favotites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
