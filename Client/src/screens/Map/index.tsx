import { BiSearchAlt2 } from 'react-icons/bi'
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Link } from 'react-router-dom'
import Leaflet from 'leaflet'

import iconUser from '../../assets/UserIcon.png'

import './styles.css'
import { SetStateAction, useEffect, useState } from 'react'
import api from '../../services/api'

interface farmProps {
  id: number
  nome: string
  cor: string
  local: []
  imagens: []
}

export default function Map() {
  const [farms, setFarms] = useState<farmProps[]>()
  const [latitudeUser, setLatitudeUser] = useState(0)
  const [longitudeUser, setLongitudeUser] = useState(0)

  const userIcon = Leaflet.icon({
    iconUrl: iconUser,
    iconSize: [80, 80],
    iconAnchor: [40, 65],
    popupAnchor: [0, -55],
  })

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setLatitudeUser(position.coords.latitude)
        setLongitudeUser(position.coords.longitude)
      })
      console.log(latitudeUser, longitudeUser)
    }
  }

  useEffect(() => {
    api
      .get('/farms')
      .then((response: { data: SetStateAction<farmProps[] | undefined> }) => {
        setFarms(response.data)
      })
    getLocation()
  }, [])

  return (
    <>
      <MapContainer
        id="map"
        zoom={15}
        center={[-23.1115914, -50.3749315]}
        scrollWheelZoom={true}
        className="map"
        style={{ height: '80vh', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`}
        />
        {latitudeUser ? (
          <Marker icon={userIcon} position={[latitudeUser, longitudeUser]}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxHeight={240}
              className="mapPopup"
            >
              Você está aqui!
            </Popup>
          </Marker>
        ) : null}
        {farms?.map((farm) => {
          return (
            <Polygon positions={farm.local} key={farm.id} color={farm.cor}>
              <Popup closeButton={false} minWidth={250} className="mapPopup">
                <div className="grid grid-cols-1 content-center w-full">
                  <span>{farm.nome}</span>
                  <div className="w-full mt-2 mb-4">
                    <Swiper
                      slidesPerView={1}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                    >
                      {farms.map((farm) => {
                        return (
                          <SwiperSlide key={farm.id}>
                            <div className="w-auto bg-white py-3">
                              <img
                                className="w-auto h-full max-h-24 rounded-md m-auto select-none"
                                src={farm.imagens[farm.imagens.length - 1]}
                                alt="Slide Image"
                              />
                              <Link
                                to={`/locacao/detalhe`}
                                className="flex text-sm items-center justify-center w-36 h-10 bg-green-500 rounded-md text-white"
                                style={{ margin: '0 auto' }}
                              >
                                Ver detalhes
                              </Link>
                            </div>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </div>
                  <div className="flex w-full">
                    <Link
                      to={`/fazenda`}
                      className="flex text-sm items-center justify-center w-11/12 h-10 bg-green-500 rounded-md text-white"
                    >
                      <BiSearchAlt2 /> Ver fazenda
                    </Link>
                  </div>
                </div>
              </Popup>
            </Polygon>
          )
        })}
      </MapContainer>
    </>
  )
}
