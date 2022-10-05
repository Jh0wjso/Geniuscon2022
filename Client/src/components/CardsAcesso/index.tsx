import './styles.css'
import { Link } from 'react-router-dom'

interface CardsAcessoProps {
  link: string
  img?: string
  titulo: string
  descricao: string
}

export default function CardsAcesso({
  img,
  link,
  titulo,
  descricao,
}: CardsAcessoProps) {
  return (
    <Link
      to={link}
      className="card-home flex flex-col items-center justify-center text-center w-full rounded shadow-lg shadow-gray-200 hover:bg-grayHover transition-all duration-900 px-8 py-8 border-1 border-b-gray-200 bg-white"
    >
      <img className="w-12 h-12" src={img} alt="" />
      <div className="flex flex-col justify-center">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <p className="text-gray-700 text-base m-0">{descricao}</p>
      </div>
    </Link>
  )
}
