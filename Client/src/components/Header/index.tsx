import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import './styles.css'

import { Link } from 'react-router-dom'
import brasil from '../../assets/languages/brazil.png'
import english from '../../assets/languages/usa.png'
import spain from '../../assets/languages/spain.png'
import france from '../../assets/languages/france.png'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav id="navigation" className="navigation">
      <div className="grid grid-cols-3 justify-center border-b-2 py-2 items-center h-20 md:h-auto">
        <div className="flex flex-col items-center ml-0 md:ml-10">
          <div className='perfil-header '>
            <Link to={''}>
              <BiUserCircle size={50} />
              <p>Meu Perfil</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="#">
            <img className="w-80 h-auto" src="src\assets\img\logos\logo-banner.png" />
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => { setIsNavExpanded(!isNavExpanded) }}
        >
          <FaBars />
        </button>
        <div className="flex justify-end ml-0 md:mr-10">
          <div id="optionLanguageDesktop">
            <button>
              <img className="w-auto h-10 m-1" src={brasil} />
            </button>
            <button>
              <img className="w-auto h-10 m-1" src={english} />
            </button>
            <button>
              <img className="w-auto h-10 m-1" src={spain} />
            </button>
            <button>
              <img className="w-auto h-10 m-1" src={france} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul className="navigation-menu-ul" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/Servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/mapa">Mapa</Link>
          </li>
          <li>
            <Link to="/">Clima</Link>
          </li>
          <li>
            <Link to="/">Insumos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
