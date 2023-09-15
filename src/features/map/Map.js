import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet/MapContainer';

function Map() {
    const position = [51.505, -0.09]
    
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>

        </MapContainer>
    )
}

export default Map;