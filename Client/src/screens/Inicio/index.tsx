/* eslint-disable prettier/prettier */
import { FaStore } from 'react-icons/fa'
import { FiTarget } from 'react-icons/fi'
import { GiBrazil} from 'react-icons/gi'
import { TbWorld } from 'react-icons/tb'
import farm from '../../assets/img/farm.jpeg'

import CardsAcesso from '../../components/CardsAcesso'
import './styles.css'

export default function Inicio() {
  return (
    <>
      <img className="w-full h-96 object-cover" src={farm} alt="" />
      <div className=" w-full mt-4 h-14 md:w-3/4 m-auto bg-gray-500 text-white rounded">
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
      <section id="inicio" className=''>
        <h1 className="text-center text-6xl mt-12 mb-8">Locação</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-1 justify-center gap-5">
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027029462820339792/harvester.png'
            titulo="Colheitadeiras"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027030578714906705/tractor.png'
            titulo="Tratores"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027024822892511262/ceifeira-debulhadora_1.png'
            titulo="Colhedor de Cana"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027036473972772884/pesticide_1.png'
            titulo="Pulverizadores"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027032731282051142/grader_1.png'
            titulo="Grades"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027033492166549574/hay-bale.png'
            titulo="Enfardadoras"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1027039724285726741/1027039757991157760/silagem.png'
            titulo="Forrageiras"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://static.thenounproject.com/png/4453885-200.png'
            titulo="Semeadoras"
            descricao="Acesse sua conta"
          />
        </div>
      </section>
    <section>
    <h1 className="text-center text-6xl mt-12 mb-8">Serviços</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-1 justify-center gap-5">
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027029462820339792/harvester.png'
            titulo="Correção de Solo"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027030578714906705/tractor.png'
            titulo="Manutenção Especializada"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027024822892511262/ceifeira-debulhadora_1.png'
            titulo="Transporte"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027036473972772884/pesticide_1.png'
            titulo="Manuseio de Maquinários"
            descricao="Acesse sua conta"
          />
          <CardsAcesso
            link="#"
            img='https://cdn.discordapp.com/attachments/1025171766101938206/1027036473972772884/pesticide_1.png'
            titulo="Abastecimento"
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
      <section>
      <h1 className='ml-12 mt-15 mb-15 text-center text-6xl mt-12 mb-8'>Novidades</h1>
      <div className="grid grid-cols-2 gap-3 mx-10 pb-16">
        <img className='flex w-full max-w-[900px] rounded-2xl justify-center' src="https://cdn.noticiasagricolas.com.br/dbimagens/a4839192428521ec0a1ce880223a39cc.jpg" alt="" />
        <div className='flex items-center'>
          <ul className='grid grid-cols-2 gap-8 justify-center max-h-full rounded-2xl w-1000px'>
            <li>
              <img src="https://img.freepik.com/fotos-gratis/agricultura-e-conceito-de-producao-de-alimentos-com-silos-de-maquina-de-trator-e-sistema-de-irrigacao_342744-565.jpg?w=1380&t=st=1664989714~exp=1664990314~hmac=cba6cd166a41a7148d860740f27d12ad33480caeb9615efa52ed2421aff5c797" alt="" />
            </li>
            <li>
            <img src="https://img.freepik.com/fotos-gratis/campo-de-cultivo-de-maquina-agricola-trator_342744-564.jpg?w=1380&t=st=1664989903~exp=1664990503~hmac=16dec118e6abf36c621f7267b6d5954df26747fc39121a12e14f7d87ddd780dc" alt="" />
            </li>
            <li>
            <img src="https://img.freepik.com/fotos-gratis/vista-aerea-do-drone-da-colheitadeira-coletando-colheitas_1268-20615.jpg?w=1380&t=st=1664989766~exp=1664990366~hmac=6c4ea077b451c11582babc24e916d5e074f5dda73e3872a90aef95992fd6b431" alt="" />
            </li>
            <li>
            <img src="http://s2.glbimg.com/aFWwcIq0YX0bvSyT4J1HliK7q78=/e.glbimg.com/og/ed/f/original/2015/12/16/thinkstockphotos-476743286.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>

      </section>
    </>
  )
}
