import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import banner1 from '../../assets/img/detail/trator.jpg'
import banner2 from '../../assets/img/detail/trator2.jpg'
import banner3 from '../../assets/img/detail/trator3.jpg'
import banner4 from '../../assets/img/detail/trator4.jpg'
import seguro from '../../assets/contratos/modelo-de-contrato-de-seguro.pdf'
import pdf from '../../assets/contratos/contrato-servicos.pdf'

import './styles.css'
import { Link } from 'react-router-dom'

export default function LocacaoDetail() {
  // const [tipoPagamento, setTipoPagamento] = useState('')

  const params = {
    slide1: {
      img: banner1,
      title: 'Santuario São Miguel Arcanjo',
    },
    slide2: {
      img: banner2,
      title: 'Castelo Vinícola La Dorni',
    },
    slide3: {
      img: banner3,
      title: 'Praça Brasil/Japão e Centro Cultural',
    },
    slide4: {
      img: banner4,
      title: 'Praça Brasil/Japão e Centro Cultural',
    },
  }

  // function handleSelect(event: any) {
  //   console.log(event.target.value)
  //   setTipoPagamento(event.target.value)
  // }

  function handleInfo(text: string) {
    // Exibe modal com o text
    // *O Proprietário não permite outros operadores em seu maquinário
  }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src={params.slide1.img}
            alt="Slide Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src={params.slide2.img}
            alt="Slide Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src={params.slide3.img}
            alt="Slide Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src={params.slide4.img}
            alt="Slide Image"
          />
        </SwiperSlide>
      </Swiper>
      <section
        style={{ marginTop: -70 }}
        className="detail-container relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="info col-span-3">
            <div className="container bg-white rounded-lg px-10 py-5">
              <label className="text-4xl font-bold">
                A950 - <span className="text-green-brasao2">Valtra</span>
              </label>
              <p>3.2 HPE 4X4 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO</p>
              <div className="detail grid grid-cols-3 gap-5 my-10 mt-12">
                <span>
                  <h2>Proprietário</h2>
                  <strong>Fazenda Garage</strong>
                </span>
                <span>
                  <h2>Cidade</h2>
                  <strong>Bandeirantes, PR</strong>
                </span>
                <span>
                  <h2>Ano</h2>
                  <strong>2005</strong>
                </span>
                <span>
                  <h2>KM</h2>
                  <strong>39.440</strong>
                </span>
                <span>
                  <h2>Marca</h2>
                  <strong>Valtra</strong>
                </span>
                <span>
                  <h2>Combustível</h2>
                  <strong>Diesel</strong>
                </span>
                <span>
                  <h2>Aceita operador tercerizado</h2>
                  <strong>Não</strong>
                </span>
                <span>
                  <h2>Disponibilidade transporte</h2>
                  <strong>Sim</strong>
                </span>
                <span>
                  <h2>Disponibilidade transporte</h2>
                  <strong>Não</strong>
                </span>
              </div>
              <h2>Descrição</h2>
              <strong>
                Disponível para aluguel, todo revisado e conservado.
                Disponibilizamos um operário junto para manusear o maquinário
              </strong>
            </div>
            <div className="container  bg-white rounded-lg px-10 py-5 my-5">
              <h2>Itens do veículo</h2>
              <div className="detail grid grid-cols-3 gap-5">
                <strong>GPS</strong>
                <strong>Airbag</strong>
                <strong>Alarme</strong>
                <strong>Controle de tração</strong>
                <strong>Rádio</strong>
                <strong>Tração 4x4</strong>
                <strong>Colheitadeira Axial</strong>
                <strong>Direção hidraulica</strong>
                <strong>Comando Hidráulico</strong>
                <strong>Peso traseiro</strong>
                <strong>Peso dianteiro</strong>
                <strong>Comando duplo</strong>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="buy bg-white rounded-lg  px-10 py-5">
              <span>
                <h2>Valor diária</h2>
                <strong style={{ fontSize: '2.3rem' }}>R$ 288.400</strong>
              </span>

              <form>
                <div className="my-5">
                  <h2>Envie uma mensagem ao vendedor</h2>
                  <div className="grid grid-cols-1 gap-1">
                    <div>
                      <label>Nome:</label>
                      <input type="text" placeholder="Digite seu nome..." />
                    </div>
                    <div>
                      <label>Email:</label>
                      <input type="text" placeholder="Digite seu email..." />
                    </div>
                    {/* <div>
                    <label>Tipo de pagamento</label>
                    <select className="py-2" onChange={(e) => handleSelect(e)}>
                      <option value="" selected disabled hidden>
                        Escolha o tipo de pagamento...
                      </option>
                      <option value="diaria">Pagar por diária</option>
                      <option value="km">Pagar por KM</option>
                      <option value="alqueire">Pagar por alqueire</option>
                      <option value="produto">
                        Pagar com soja, milho (negociável)...
                      </option>
                    </select>
                  </div> */}
                    <div>
                      <label>Quantos diárias deseja comprar:</label>
                      <input
                        type="number"
                        placeholder="Digite a quantidade..."
                      />
                    </div>
                    <Link to="/compra">
                      <button className="mt-8 font-bold bg-green-brasao hover:bg-green-900">
                        Efetuar compra
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
