import { Routes, Route } from 'react-router-dom'
import Cadastro from './screens/Dashboard/Cadastro'
import Login from './screens/Dashboard/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
    </Routes>
  )
}