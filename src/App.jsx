import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Four_O_Four from './components/Four_O_Four'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="*" element={<Four_O_Four/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
