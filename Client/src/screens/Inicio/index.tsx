import { FaSeedling, FaSprayCan, FaTruckLoading } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { GiFarmTractor, GiSugarCane } from 'react-icons/gi';
import { MdAgriculture } from 'react-icons/md';
import { TbBulldozer } from 'react-icons/tb';
import CardsAcesso from '../../components/CardsAcesso';
import './styles.css';

export default function Inicio() {
  return (
    <section id="inicio" className='grid grid-cols-4 my-1 justify-center gap-5 '>
      <CardsAcesso
        link="#"
        icon={<GiFarmTractor size={50} />}
        titulo="Colheitadeiras"
        descricao="Acesse sua conta"
      />
      <CardsAcesso
        link="#"
        icon={<MdAgriculture size={50}   />}
        titulo="Tratores"
        descricao="Acesse sua conta"
      />
      <CardsAcesso
        link="#"
        icon={<GiSugarCane size={50}   />}
        titulo="Colhedor de Cana"
        descricao="Acesse sua conta"
      />
      <CardsAcesso
        link="#"
        icon={<FaSprayCan size={50}   />}
        titulo="Pulverizadores"
        descricao="Acesse sua conta"
      />
      <CardsAcesso
        link="#"
        icon={<TbBulldozer size={50}   />}
        titulo="Grades"
        descricao="Acesse sua conta"
      />
      <CardsAcesso
        link="#"
        icon={<FaTruckLoading size={50}   />}
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
        icon={<FaSeedling size={50}   />}
        titulo="Semeadoras"
        descricao="Acesse sua conta"
      />
    </section>
  )
}
