import './styles.css'
import { Link } from 'react-router-dom'

interface CardProps {
  desc: string
  img: string
  telefone: string
  title: string
  preco: string
  categoria: string
  marca: string
}

export default function Card({ marca, categoria, desc, img, title, telefone, preco }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">
          <img src={img} alt="" />
          <label>{title}</label>
        </div>
        <p>{desc}</p>
        <div className="card-footer">
          <p>Categoria:{categoria}</p>
          <p>Preço:{preco}</p>
          <p>Marca:{marca}</p>
          <p>Contato:{telefone}</p>
        </div>
        <div className="card-redirect">
          <Link to={''}><button>Saiba mais</button></Link>
        </div>
      </div>
    </div>
  )
}