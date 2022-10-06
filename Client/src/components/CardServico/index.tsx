import { Link } from 'react-router-dom'
import './styles.css'

interface CardServicoProps {
  desc: string
  img: string
  preco: number
  titulo: string
  local: string
  servico: string
  horario: string
  link: string
}

export default function CardServico({
  desc,
  img,
  preco,
  titulo,
  local,
  servico,
  horario,
  link,
}: CardServicoProps) {
  return (
    <div className="card-servico h-full">
      <img src={img} alt="Imagem do serviço" className="h-24 bg-cover" />
      <div className="servico-titulo">
        <h3>{titulo}</h3>
      </div>
      <div className="servico-desc h-full">
        <p>{desc}</p>
      </div>
      <div className="servico-info h-full">
        <p>Preço: {preco}</p>
        <p>Local: {local}</p>
        <p>Serviço: {servico}</p>
        <p>Horário: {horario}</p>
        <Link to={link}>Ver mais</Link>
      </div>
    </div>
  )
}
