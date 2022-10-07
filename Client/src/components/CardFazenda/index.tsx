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
}

export default function CardFazenda({
  marca,
  categoria,
  desc,
  img,
  title,
  proprietario,
  preco,
  distancia,
}: CardProps) {
  return (
    <div className="card-fazenda">
      <div className="card-fazenda-content bg-gray-100">
        <div className="card-fazenda-title">
          <img
            src={img}
            alt=""
            className="max-h-32 mb-8 w-80 object-cover rounded-t-lg"
          />
          <label>{title}</label>
        </div>
        {desc && <p>{desc}</p>}
        <div className="card-fazenda-footer">
          <p>{categoria}</p>
          <p>{marca}</p>
          <p>{proprietario}</p>
          <p>R$ {preco} /dia</p>
          <p>Km {distancia}</p>
        </div>
        <div className="card-fazenda-redirect p-2 flex-col">
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
