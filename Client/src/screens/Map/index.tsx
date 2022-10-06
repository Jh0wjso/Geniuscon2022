import { BiSearchAlt2 } from 'react-icons/bi'
import { farmsData } from './FarmsData'
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
        {farmsData?.map((farm) => {
          return (
            <Polygon positions={farm.local} key={farm.id} color="#46903A">
              <Popup
                closeButton={false}
                minWidth={250}
                maxHeight={240}
                className="mapPopup"
              >
                <div className="grid grid-cols-1 content-center w-full">
                  <span>{farm.nome}</span>
                  <div className="flex w-full">
                    <Link
                      to={`/hotel/detalhe/${farm.id}`}
                      className="flex text-sm items-center justify-center w-11/12 h-10 bg-green-500 rounded-md text-white"
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
