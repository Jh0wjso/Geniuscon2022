import { Link } from 'react-router-dom'
import { limitDescription } from '../../utils/limitedDescription'
import './styles.css'

interface CardServicoProps {
  id: number
  nome: string
  titulo: string
  descricao: string
  local: string
  horario: string
  valor: number
  link?: string
}

export default function CardServico({
  id,
  nome,
  titulo,
  descricao,
  local,
  horario,
  valor,
  link,
}: CardServicoProps) {
  return (
    <div className="card-servico h-full">
      <div className="servico-titulo">
        <h3>{titulo}</h3>
      </div>
      <h4>{nome}</h4>
      <div className="servico-desc mb-2">
        <p>{limitDescription(descricao)}</p>
      </div>
      <div className="servico-info">
        <p className="flex font-bold">
          Valor: <p className="text-lime-900">R$ {valor}</p>
        </p>
        <p className="font-bold">Local: {local}</p>
        <p>Horário: {horario}</p>
        <Link to={`${link}`} className="mt-4">
          Ver mais
        </Link>
      </div>
    </div>
  )
}
