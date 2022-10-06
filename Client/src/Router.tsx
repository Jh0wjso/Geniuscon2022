import { Routes, Route } from 'react-router-dom'
import CompraLocacao from './screens/CompraLocacao'
import Cadastro from './screens/Dashboard/Cadastro'
import Login from './screens/Dashboard/Login'
import User from './screens/Dashboard/User'
import Vendor from './screens/Dashboard/Vendor'
import Fazenda from './screens/Fazenda'
import Inicio from './screens/Inicio'
import Locacao from './screens/Locacao'
import LocacaoDetail from './screens/LocacaoDetail'
import Map from './screens/Map'
import Servico from './screens/Servicos'
import LocacaoMaquinario from './screens/LocacaoMaquinario'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/locacao" element={<Locacao />} />
      <Route path="/locacao/detalhe" element={<LocacaoDetail />} />
      <Route path="/servicos" element={<Servico />} />
      <Route path="/compra" element={<CompraLocacao />} />
      <Route path="/locacao/maquinario" element={<LocacaoMaquinario />} />

      {/* Dashboards */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/vendor" element={<Vendor />} />
      <Route path="/cliente" element={<User />} />
      <Route path="/map" element={<Map />} />
      <Route path="/fazenda" element={<Fazenda />} />
    </Routes>
  )
}
