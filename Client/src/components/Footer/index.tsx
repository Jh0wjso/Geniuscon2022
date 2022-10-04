import {
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'
import './styles.css'

import logo from '../../assets/img/logos/ICON.png'
import logoBanner from '../../assets/img/logos/logo-banner.png'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t-2">
      <div className="footer bg-white ">
        <div className="flex">
          <div className="redes mr-4">
            <img src={logoBanner} alt="" />
          </div>
          <div className="containerHero py-8 px-4 lg:pr-8 ">
            <div className="containerInfos bg-white ">
              <div className="column titleHidden text-black">
                <h3 className="text-black">Navegação</h3>
                <div className="pages">
                  <Link to="#">Início</Link>
                  <Link to="#"> Serviços</Link>
                  <Link to="#">Mapas</Link>
                  <Link to="#"></Link>
                </div>
              </div>
              <div className="column titleHidden">
                <h3 className="text-black">Atualização</h3>
                <div className="notices text-black">
                  <ul>
                    <li>texto</li>
                    <li>texto</li>
                    <li>texto</li>
                  </ul>
                </div>
              </div>
              <div className="column text-black">
                <h3 className="text-black">Contato</h3>
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
                      <FaFacebook size={28} />
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
        <div className="copyright bg-gray-550 text-white grid  md:flex justify-center justify-items-center">
          <p className="m-0 text-center hidden md:flex p-4">
            © 2022 - Genius Hackathon - Todos os direitos reservados
          </p>
          <p className="m-0 text-center md:hidden p-2">
            © 2022 - Genius Hackathon
            <br />
            Todos os direitos reservados
          </p>
          <img
            className="w-auto max-h-12 md:max-h-14 bg-contain "
            src={logo}
            alt="Logo Bandeirantes"
          />
          <p className="m-0 text-center hidden p-4 md:flex  ">
            Website desenvolvido pela equipe Garage Sprint Code
          </p>
        </div>
      </div>
    </footer>
  )
}
