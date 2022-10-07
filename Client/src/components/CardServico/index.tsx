import { Link } from 'react-router-dom'
import { limitDescription } from '../../utils/limitedDescription'
import { StarRating } from '../StarRating'
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
      <div className="servico-desc mb-2 h-20">
        <p>{limitDescription(descricao)}</p>
      </div>
      <div className="servico-info">
        <p>
          <b>Valor:</b> R${valor}
        </p>
        <p>
          <b>Local:</b> {local}
        </p>
        <p>
          <b>Horário:</b> {horario}
        </p>
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <StarRating />
            <span className="ml-2 text-green-600 font-bold">
              ({Math.floor(Math.random() * 25) + 5})
            </span>
          </div>
        </div>

        <Link to={`${link}`}>Saiba mais</Link>
      </div>
    </div>
  )
}
