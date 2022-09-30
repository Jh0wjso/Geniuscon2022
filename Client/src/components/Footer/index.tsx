import { FaEnvelope, FaFacebook, FaPhone, FaYoutube, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import './styles.css'

import logo from '/src/assets/img/logos/ICON.png'
import logoBanner from '/src/assets/img/logos/logo-banner.png'
import { Link } from 'react-router-dom'
import { BsSquare } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="border-t-2">
      <div className="footer bg-gray-550 ">
      
        <div className='flex'>
          <div className="redes mr-4">
            <img src={logoBanner} alt="" />
              
          </div>
          <div className="containerHero pt-8">
            <div className="containerInfos bg-gray-550 ">
              <div className="column titleHidden text-white">
                <h3 className='text-white'>Navegação</h3>
                <div className="pages">
                  <Link to="#">Início</Link>
                  <Link to="#"> Serviços</Link>
                  <Link to="#">Mapas</Link>
                  <Link to="#"></Link>
                </div>
              </div>
              <div className="column titleHidden">
                <h3 className='text-white'>Atualização</h3>
                <div className="notices text-white">
                  <ul>
                    <li>
                      texto
                    </li>
                    <li>
                      texto
                    </li>
                    <li>
                      texto
                    </li>
                  </ul>
                </div>
              </div>
            <div className="column text-white">
              <h3 className='text-white'>Contato</h3>
              <div className="contacts">
                <strong>Universidade Estadual do Norte do Paraná</strong>
                <strong>
                  <FaPhone color="" />
                  (43) 0000-0000
                </strong>
                <strong>
                  <FaEnvelope color="" />
                  emailImaginario@uenp.edu.br
                </strong>
                <div className="redesIcon ">
                <a href="#">
                  <FaYoutube size={28} />
                </a>
                <a href="#">
                  <FaFacebook size={28}/>
                </a>
                <a href="#">
                  <FaInstagram size={28} />
                </a>
                <a href="#">
                  <FaWhatsapp size={28} />
                </a>
            
            </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="copyright bg-gray-550 text-white">
          <p>© 2022 - Genius Hackathon - Todos os direitos reservados</p>
          <img
            className=" w-auto max-h-20 bg-contain"
            src={logo}
            alt="Logo Bandeirantes"
          />
          <p>Website desenvolvido pela equipe Garage Sprint Code</p>
        </div>
        </div>
    </footer>
  )
}
