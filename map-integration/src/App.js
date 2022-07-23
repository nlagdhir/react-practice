import { useState, useEffect } from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';


function App() {

  let [marker, setMarker] = useState();

  mapboxgl.accessToken = 'pk.eyJ1IjoiamFkam91YnJhbiIsImEiOiJja2g2M2hvbW0wNnQ3MnFrOXQ0cWFkcGd6In0.1QhAVs5MV4U33Er08CCX0g';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container : 'map',
      style : 'mapbox://styles/mapbox/dark-v10',
      center : [-74.5, 40],
      zoom : 9
    })

    marker = new mapboxgl.Marker()
    .setLngLat([-74.5,40])
    .addTo(map);
    setMarker(marker);
  },[])

  function handleStoreChange(event) {
    marker.setLngLat(stores[event.target.value]);
  }

  const stores = {
    central: [12.567898, 55.67583],
    norrebro: [12.553806, 55.699299],
    airport: [12.650784, 55.618042]
}
  
  return (
    <>
    <div className="map-overlay">
            <h3>Choose store: </h3>
            <select onChange={handleStoreChange}>
                <option value="central">Central station</option>
                <option value="norrebro">Norrebro street</option>
                <option value="airport">CPH Airport</option>
            </select>
        </div>
    <div id="map"></div>
    </>
  );
}

export default App;
