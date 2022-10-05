import { BiSearchAlt2, BiMoney, BiPhoneCall } from 'react-icons/bi'
import { offersData } from './OffersData'
import { MapContainer, Polygon, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Map() {
  return (
    <>
      <MapContainer
        id="map"
        zoom={15}
        center={[-23.1115914, -50.3749315]}
        scrollWheelZoom={false}
        className="map"
        style={{ height: '80vh', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`}
        />
        {offersData?.map((offer) => {
          return (
            <Polygon positions={offer.local} key={offer.id}>
              <Popup
                closeButton={false}
                minWidth={250}
                maxHeight={240}
                className="mapPopup"
              >
                <div className="grid grid-cols-1 content-center w-full">
                  <span>Oferta {offer.nome}</span>
                  <div className="grid grid-cols-2 gap-4 my-2">
                    <div className="flex items-center text-sm gap-1 justify-center">
                      <BiPhoneCall size={20} />
                      <span className="whitespace-nowrap">{offer.nome}</span>
                    </div>
                    <div className="flex items-center text-sm gap-1 justify-center">
                      <BiMoney size={20} />
                      <span className="whitespace-nowrap">{offer.nome}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <Link
                      to={`/hotel/detalhe/${offer.id}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiSearchAlt2 /> Ver mais
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
