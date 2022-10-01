import './styles.css';
import { FiUsers } from 'react-icons/fi';
import { TbMailbox } from 'react-icons/tb';
import { FiList } from 'react-icons/fi';
import { FiMap } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';

// Esboço de dashboard para o usuário vendedor com as principais funcionalidades, irei transformar 
// em componentes o que for possível

export default function Vendor() {
  return (
    <div className="vendor-body">
      <div className="vendor-content">
        <div className="vendor-card">
          <div className="vendor-card-content">
            <FiUsers size={40}></FiUsers>
            <h1>Clientes</h1>
            <h4>45 ativos</h4>
          </div>
        </div>
        <div className="vendor-card">
          <div className="vendor-card-content">
            <TbMailbox size={40}></TbMailbox>
            <h1>Pedidos</h1>
            <h4>3 pedidos</h4>
          </div>
        </div>
        <div className="vendor-card">
          <div className="vendor-card-content">
            <FiList size={40}></FiList>
            <h1>Produtos</h1>
            <h4>10 itens</h4>
          </div>
        </div>
        <div className="vendor-card">
          <div className="vendor-card-content">
            <FiMap size={40}></FiMap>
            <h1>Localização</h1>
            <h4>Localização das suas máquinas</h4>
          </div>
        </div>
        <div className="vendor-card">
          <div className="vendor-card-content">
            <FiMessageSquare size={40}></FiMessageSquare>
            <h1>Mensagens</h1>
            <h4>12 mensagens</h4>
          </div>
        </div>
        <div className="vendor-card">
          <div className="vendor-card-content">
            <FiStar size={40}></FiStar>
            <h1>Avaliações</h1>
            <h4>15 avaliações</h4>
          </div>
        </div>
      </div>
      <div className="vendor-calendar">
        <h1>Calendário</h1>
      </div>
    </div>
  )
}