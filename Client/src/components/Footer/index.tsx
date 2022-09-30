import { FaEnvelope, FaFacebook, FaPhone, FaYoutube } from 'react-icons/fa'
import './styles.css'

import logo from '/src/assets/img/logos/ICON.png'
import logoBanner from '/src/assets/img/logos/logo-banner.png'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t-2">
      <div className="footer">
        <div className="redes">
          <div className="logo">
            <img
              className="w-auto mt-6 mb-6 object-contain"
              src={logo}
              alt="Logo agrolugue"
            />
          </div>
          <div className="redesIcon">
            <a href="google.com">
              <FaFacebook size={28} />
            </a>
            <a href="">
              <FaYoutube size={28} />
            </a>
          </div>
        </div>
        <div className="containerHero">
          <div className="containerInfos">
            <div className="column titleHidden">
              <h3></h3>
              <div className="pages">
                <Link to="/historia"></Link>
                <Link to="/hoteis"></Link>
                <Link to="/turismo"></Link>
                <Link to="/map"></Link>
              </div>
            </div>
            <div className="column titleHidden">
              <h3>Agenda</h3>
              <div className="notices">
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
            <div className="column">
              <h3></h3>
              <div className="contacts">
                <strong>Rua Frei Raphael Proner, 1457</strong>
                <strong>
                  <FaPhone color="#727272" />
                  (43) 3542-4525
                </strong>
                <strong>
                  <FaEnvelope color="#727272" />
                  comunicacao@bandeirantes.pr.gov.br
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p></p>
        <img
          className="w-auto max-h-20 bg-contain"
          src={logoBanner}
          alt="Logo Bandeirantes"
        />
        <p></p>
      </div>
    </footer>
  )
}
