import 'leaflet/dist/leaflet.css'
import styles from '../../styles/Home.module.css'

import L from 'leaflet'

import { 
    MapContainer, TileLayer, useMap, Popup, Marker
} from 'react-leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const DEFAULT_CENTER = [37.77, -122.45]
const markerPosition = DEFAULT_CENTER;

function Map() {
    return (
        <MapContainer className={styles.homeMap} center={DEFAULT_CENTER} zoom={13} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPosition}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;