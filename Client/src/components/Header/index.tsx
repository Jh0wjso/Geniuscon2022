import { useState } from 'react'
import { FaBars, FaUserCircle } from 'react-icons/fa'
import './styles.css'

import { Link } from 'react-router-dom'
import brasil from '../../assets/languages/brazil.png'
import english from '../../assets/languages/usa.png'
import spain from '../../assets/languages/spain.png'
import france from '../../assets/languages/france.png'
import logobanner from '../../assets/img/logos/logo-banner.png'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav id="navigation" className="navigation">
      <div className="grid grid-cols-2 border-b h-20 md:h-auto justify-between">
        <div className="flex justify-start">
          <Link to="#">
            <img alt="logo" className="w-56 h-auto" src={logobanner} />
          </Link>
        </div>

        <div className="flex justify-end  mr-2">
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded)
            }}
          >
            <FaBars />
          </button>
          <div className="flex justify-end ml-0">
            <div className="mr-6" id="optionLanguageDesktop">
              <button className="bg-transparent py-0 hover:bg-transparent">
                <img className="w-auto h-10 m-1" src={brasil} alt="pt-BR" />
              </button>
              <button className="bg-transparent py-0 hover:bg-transparent">
                <img className="w-auto h-10 m-1" src={english} alt="en-US" />
              </button>
              <button className="bg-transparent py-0 hover:bg-transparent">
                <img className="w-auto h-10 m-1" src={spain} alt="en-EN" />
              </button>
              <button className="bg-transparent py-0 hover:bg-transparent">
                <img className="w-auto h-10 m-1" src={france} alt="fr-FR" />
              </button>
            </div>
          </div>
          <div className="flex items-center border-l mr-4">
            <Link to={''} className="flex flex-row center">
              <FaUserCircle className="mr-2 ml-2" size={26} color={'#8D8D99'} />
              <p className="m-0">Entrar</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul
          className="navigation-menu-ul"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/locacao">Locação</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/map">Mapa</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
