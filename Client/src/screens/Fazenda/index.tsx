import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import banner1 from '../../assets/img/detail/trator.jpg'
import banner2 from '../../assets/img/detail/trator2.jpg'
import banner3 from '../../assets/img/detail/trator3.jpg'
import banner4 from '../../assets/img/detail/trator4.jpg'
import Card from '../../components/Card'

export default function Fazenda() {
  const data = {
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

  return (
    <>
      <div className="p-8">
        <div className="flex mb-12 p-8 items-end bg-slate-300 rounded-sm">
          <img
            className="max-w-xs mr-5 rounded-b-none rounded-lg h-52"
            src="https://cdn.discordapp.com/avatars/1027377903018725467/1628fc11e7961d85181295493426b775.png?size=1024"
            alt=""
          />
          <div className="w-full flex flex-row items-start">
            <div className="w-full">
              <h1 className="text-green-900">Lima Amaro</h1>
              <p className="text-sm text-gray-500">Descrição: </p>
              <p className="text-sm text-gray-500">
                Só Amaro no lima amaro amaro lima
              </p>
            </div>
            <div className="w-1/3">
              <h2 className="text-green-900">Contatos:</h2>
              <div>
                <p className="text-sm text-gray-500">Telefone: 9999-9999</p>
                <p className="text-sm text-gray-500">
                  E-mail: hackathon@mail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 pt-0">
        <h1 className="text-green-900 mb-14">Fazenda Zoio dagua</h1>
        <div>
          <h2 className="text-green-900">Tratores</h2>
          <Swiper
            slidesPerView={2}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiperGap"
          >
            <SwiperSlide className="ml-5">
              <Card
                title="Trator 1"
                categoria="Trator"
                marca="John Deere"
                proprietario="Lima Amaro"
                preco={120.0}
                img={data.slide1.img}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Trator 1"
                categoria="Trator"
                marca="John Deere"
                proprietario="Lima Amaro"
                preco={120.0}
                img={data.slide2.img}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Trator 1"
                categoria="Trator"
                marca="John Deere"
                proprietario="Lima Amaro"
                preco={120.0}
                img={data.slide3.img}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Trator 1"
                categoria="Trator"
                marca="John Deere"
                proprietario="Lima Amaro"
                preco={120.0}
                img={data.slide4.img}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-40">
          <h2 className="text-green-900">Colheitadeiras</h2>
          <Swiper
            slidesPerView={2}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiperGap"
          >
            <SwiperSlide className="ml-5">
              <Card
                title="Trator 1"
                categoria="Trator"
                marca="John Deere"
                proprietario="Lima Amaro"
                preco={120.0}
                img={data.slide1.img}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Trator 1"
                categoria="Trator"
                marca="John Deere"
                proprietario="Lima Amaro"
                preco={120.0}
                img={data.slide2.img}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Trator 1"
                categoria="Trator"
                marca="John Deere"
                proprietario="Lima Amaro"
                preco={120.0}
                img={data.slide3.img}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Trator 1"
                categoria="Trator"
                marca="John Deere"
                proprietario="Lima Amaro"
                preco={120.0}
                img={data.slide4.img}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
