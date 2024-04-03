import Profile from "./components/Profile/Profile"
import Regiter from "./components/Register/Register"
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Regiter />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
