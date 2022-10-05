/* eslint-disable prettier/prettier */
import { FaSeedling, FaSprayCan, FaStore, FaTruckLoading } from 'react-icons/fa'
import { FiTarget } from 'react-icons/fi'
import { GiBrazil, GiFarmTractor, GiSugarCane } from 'react-icons/gi'
import { MdAgriculture } from 'react-icons/md'
import { TbBulldozer, TbWorld } from 'react-icons/tb'
import farm from '../../assets/img/farm.jpeg'

import CardsAcesso from '../../components/CardsAcesso'
import './styles.css'

export default function Inicio() {
  return (
    <>
      <img className="w-full h-96 object-cover" src={farm} alt="" />
      <section id="inicio" className=''>
          <div className=" w-full h-14 md:w-3/4 m-auto bg-gray-500 text-white  rounded">
            <div className='md:flex md:justify-around'>
            <div>
              <a href="#" className="flex items-center mt-1">
                <img
                  className="h-5 w-5 md:h-[50px] md:w-[50px]"
                  src="https://www.deere.com.br/assets/images/common/home-page/qt-tractor-white.png"
                  alt=""
                />
                <span>Ver equipamentos</span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center mt-1">
                <img
                  className="h-5 w-5 md:h-[50px] md:w-[50px]"
                  src="https://www.deere.com.br/assets/images/common/home-page/qt-dealer-small-wt.png"
                  alt=""
                />
                <span>Onde comprar</span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center mt-1">
                <img
                  className="h-5 w-5 md:h-[50px] md:w-[50px]"
                  src="https://www.deere.com.br/assets/images/common/home-page/qt-book-small-wt.png"
                  alt=""
                />
                <span>Manual técnico</span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center mt-1">
                <img
                  className="md:h-[50px] md:w-[50px]"
                  src="https://www.deere.com.br/assets/images/common/home-page/qt-news-small-wt.png"
                  alt=""
                />
                <span>Notícias</span>
              </a>
            </div>
            </div>
          </div>

        <h1 className="text-center text-6xl">Locação</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-1 justify-center gap-5 ">
          <CardsAcesso
            link="#"
            icon={<GiFarmTractor size={50} />}
            titulo="Colheitadeiras"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            icon={<MdAgriculture size={50} />}
            titulo="Tratores"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            icon={<GiSugarCane size={50} />}
            titulo="Colhedor de Cana"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            icon={<FaSprayCan size={50} />}
            titulo="Pulverizadores"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            icon={<TbBulldozer size={50} />}
            titulo="Grades"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            icon={<FaTruckLoading size={50} />}
            titulo="Enfardadoras"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            icon="#"
            titulo="Forrageiras"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            icon={<FaSeedling size={50} />}
            titulo="Semeadoras"
            descricao="Acesse sua conta"
          />
        </div>
      </section>
      <div id="inicio">
        <div className="parallax">
          <div className="container items-start p-2 text-xs md:text-lg md:items-center">
            <div className="items">
              <TbWorld size={60} className="" color="#fff" />
              <h4>Tenha visualização em tempo real</h4>
            </div>
            <div className="items">
              <GiBrazil size={60} className="" color="#fff" />
              <h4>Suporte para todo Brasil</h4>
            </div>
            <div className="items">
              <FiTarget size={60} className="" color="#fff" />
              <h4>Alcance seus objetivos de mercado</h4>
            </div>
            <div className="items">
              <FaStore size={60} className="" color="#fff" />
              <h4>Divulgue de maneira fácil seus serviços</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
