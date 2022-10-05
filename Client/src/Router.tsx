import { Routes, Route } from 'react-router-dom'
import Cadastro from './screens/Dashboard/Cadastro'
import Login from './screens/Dashboard/Login'
import User from './screens/Dashboard/User'
import Vendor from './screens/Dashboard/Vendor'
import Inicio from './screens/Inicio'
import Locacao from './screens/Locacao'
import Map from './screens/Map'
import Servico from './screens/Servicos'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/locacao" element={<Locacao />} />
      <Route path="/servicos" element={<Servico />} />

      {/* Dashboards */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/vendor" element={<Vendor />} />
      <Route path="/cliente" element={<User />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  )
}
