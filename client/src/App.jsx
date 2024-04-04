import Regiter from "./components/Register/Register"
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Main from "./components/Profile/Main"
import Profile2 from "./components/Profile/Profile2"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Regiter />} />
      <Route path="/profile" element={<Main />} />
      <Route path="/brings" element={<Profile2 />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
