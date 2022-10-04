import './styles.css'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface CardsAcessoProps {
  link: string
  icon: ReactNode
  titulo: string
  descricao: string
}

export default function CardsAcesso({
  link,
  icon,
  titulo,
  descricao,
}: CardsAcessoProps) {
  return (
    <Link
      to={link}
      className="card-home justify-center text-center w-full rounded shadow-lg shadow-gray-200 hover:bg-grayHover transition-all duration-900 px-8 py-8 grid border-1 border-b-gray-200 bg-white"
    >
      <h2 className="icon flex my-3 justify-center ">{icon}</h2>
      <div className="flex flex-col justify-center">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <p className="text-gray-700 text-base m-0">{descricao}</p>
      </div>
    </Link>
  )
}
