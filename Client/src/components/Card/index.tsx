import './styles.css'
import { Link } from 'react-router-dom'

interface CardProps {
  desc?: string
  img: string
  proprietario: string
  title: string
  preco: number
  categoria: string
  marca: string
  distancia: string
  link?: string
}

export default function Card({
  marca,
  categoria,
  desc,
  img,
  title,
  proprietario,
  preco,
  distancia,
  link,
}: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">
          <img
            src={img}
            alt=""
            className="max-h-48 mb-8 w-80 object-cover max-h-32"
          />
          <label>{title}</label>
        </div>
        {desc && <p>{desc}</p>}
        <div className="card-footer">
          <p>{categoria}</p>
          <p>{marca}</p>
          <p>{proprietario}</p>
          <p>R$ {preco} /dia</p>
          <p>Km {distancia}</p>
        </div>
        <div className="card-redirect">
          <Link to={`${link}`}>Saiba mais</Link>
        </div>
      </div>
    </div>
  )
}
