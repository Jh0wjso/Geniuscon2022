import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import banner1 from '../../assets/img/detail/trator.jpg'
import banner2 from '../../assets/img/detail/trator2.jpg'
import banner3 from '../../assets/img/detail/trator3.jpg'
import banner4 from '../../assets/img/detail/trator4.jpg'
import CardFazenda from '../../components/CardFazenda'

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
      <div className="px-8 pt-5 fazenda-user">
        <div className="banner flex p-8 pt-16 pb-0 items-end bg-white rounded-sm shadow-xl rounded-t-lg">
          <img
            className="max-w-xs mr-5 rounded-b-none rounded-lg h-40"
            src="https://avatars.githubusercontent.com/u/88116603?v=4"
            alt=""
          />
          <div className="w-full flex flex-row items-center">
            <div className="w-full">
              <h1 className="text-green-900 m-0 mb-4">Lima Amaro</h1>
              <p className="text-sm text-gray-500">
                Veja os maquinários disponíveis para locação
              </p>
            </div>
            <div className="w-1/3">
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

      <div className="p-8 shadow-md">
        <div className="flex justify-center py-1 bg-green-900 w-4/12 rounded-t-md">
          <h4 className="text-white m-0">Fazenda Malutta</h4>
        </div>

        <div className="p-8 bg-white rounded">
          <div>
            <h1 className="text-green-900 text-center">Tratores</h1>
            <Swiper
              slidesPerView={3}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiperGap"
            >
              <SwiperSlide className="">
                <CardFazenda
                  title="Trator 1"
                  categoria="Trator"
                  marca="John Deere"
                  proprietario="Lima Amaro"
                  preco={120.0}
                  img={data.slide1.img}
                  distancia="100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardFazenda
                  title="Trator 1"
                  categoria="Trator"
                  marca="John Deere"
                  proprietario="Lima Amaro"
                  preco={120.0}
                  img={data.slide2.img}
                  distancia="100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardFazenda
                  title="Trator 1"
                  categoria="Trator"
                  marca="John Deere"
                  proprietario="Lima Amaro"
                  preco={120.0}
                  img={data.slide3.img}
                  distancia="100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardFazenda
                  title="Trator 1"
                  categoria="Trator"
                  marca="John Deere"
                  proprietario="Lima Amaro"
                  preco={120.0}
                  img={data.slide4.img}
                  distancia="100"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="mt-40">
            <h1 className="text-green-900 text-center">Colheitadeira</h1>
            <Swiper
              slidesPerView={3}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiperGap"
            >
              <SwiperSlide className="ml-5">
                <CardFazenda
                  title="Trator 1"
                  categoria="Trator"
                  marca="John Deere"
                  proprietario="Lima Amaro"
                  preco={120.0}
                  img={data.slide1.img}
                  distancia="100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardFazenda
                  title="Trator 1"
                  categoria="Trator"
                  marca="John Deere"
                  proprietario="Lima Amaro"
                  preco={120.0}
                  img={data.slide2.img}
                  distancia="100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardFazenda
                  title="Trator 1"
                  categoria="Trator"
                  marca="John Deere"
                  proprietario="Lima Amaro"
                  preco={120.0}
                  img={data.slide3.img}
                  distancia="100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardFazenda
                  title="Trator 1"
                  categoria="Trator"
                  marca="John Deere"
                  proprietario="Lima Amaro"
                  preco={120.0}
                  img={data.slide4.img}
                  distancia="100"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
