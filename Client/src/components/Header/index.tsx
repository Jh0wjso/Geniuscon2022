import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import "./styles.css";

import { Link } from "react-router-dom";
import brasil from "../../assets/languages/brazil.png";
import english from "../../assets/languages/usa.png";
import spain from "../../assets/languages/spain.png";
import france from "../../assets/languages/france.png";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav id="navigation" className="navigation">
      <div className="grid grid-cols-2 border-b-2 py-2 h-20 md:h-auto justify-between">
        <div className="flex justify-start">
          <Link to="#">
            <img
              className="w-56 h-auto"
              src="src\assets\img\logos\logo-banner.png"
            />
          </Link>
        </div>

        
        <div className="flex justify-end  mr-2">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaBars />
        </button>
        <div className="flex justify-end ml-0">
          <div className="mr-6" id="optionLanguageDesktop">
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
          <div className="flex items-center border-l mr-4">
            <Link to={""}>
              <FaUserCircle
              className="mr-2 ml-2"
              size={26}
              color={'#8D8D99'}
              />
            </Link>
            <p className="m-0">Entrar</p>
          </div>
        </div>
      </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul
          className="navigation-menu-ul"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/mapa">Mapa</Link>
          </li>
          <li>
            <Link to="/locacao">Locação</Link>
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
  );
}
