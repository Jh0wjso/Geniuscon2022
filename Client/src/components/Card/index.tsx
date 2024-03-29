import './styles.css'
import { Link } from 'react-router-dom'
import { StarRating } from '../StarRating'

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
            className="mb-8 w-80 object-cover h-36 max-h-36"
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
        <div className="card-fazenda-redirect card-redirect p-0 flex-col">
          <div className="ml-10 flex flex-row justify-center items-center">
            <StarRating />
            <span className="ml-2 text-green-600 font-bold">
              ({Math.floor(Math.random() * 25) + 5})
            </span>
          </div>
          <Link to={'/locacao/detalhe'}>Saiba mais</Link>
        </div>
      </div>
    </div>
  )
}
