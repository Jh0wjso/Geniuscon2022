import { Routes, Route } from 'react-router-dom'
import Cadastro from './screens/Dashboard/Cadastro'
import Login from './screens/Dashboard/Login'
import User from './screens/Dashboard/User'
import Vendor from './screens/Dashboard/Vendor'
import Inicio from './screens/Inicio'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      {/* Dashboards */}
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/vendor" element={<Vendor/>} />
      <Route path="/cliente" element={<User/>} />
    </Routes>
  )
}