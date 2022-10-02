import { FaSeedling, FaSprayCan, FaStore, FaTruckLoading } from 'react-icons/fa';
import { FiLogIn, FiTarget } from 'react-icons/fi';
import { GiBrazil, GiFarmTractor, GiSugarCane } from 'react-icons/gi';
import { MdAgriculture } from 'react-icons/md';
import { TbBulldozer } from 'react-icons/tb';
import { TbWorld } from 'react-icons/tb';

import CardsAcesso from '../../components/CardsAcesso';
import './styles.css';

export default function Inicio() {
  return (
    <section id="inicio" >
      <h1 className='text-center text-6xl'>Locação</h1>
      <div className='grid grid-cols-4 my-1 justify-center gap-5 '>
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
      <div className='parallax'>
        <div className='container'>
          <div className='items'>
            <TbWorld size={60} className='' color="#fff" />
            <p>Tenha visualização em tempo real</p>
          </div>
          <div className='items'>
            <GiBrazil size={60} className='' color="#fff" />
            <p>Suporte para todo Brasil</p>
          </div>
          <div className='items'>
            <FiTarget size={60} className='' color="#fff" />
            <p>Alcance seus objetivos de mercado</p>
          </div>
          <div className='items'>
            <FaStore size={60} className='' color="#fff" />
            <p>Divulgue de maneira fácil seus serviços</p>
          </div>
        </div>
      </div>
    </section >
  )
}
