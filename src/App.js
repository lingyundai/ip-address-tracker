import TrackerContainer from "./features/tracker/TrackerContainer";
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  const mapRef = useRef();

  return (
    <div className="App">
    <TrackerContainer />
    </div>
  );
}

export default App;
