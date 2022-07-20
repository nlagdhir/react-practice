import { useState, useEffect } from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';


function App() {

  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken = 'pk.eyJ1IjoiamFkam91YnJhbiIsImEiOiJja2g2M2hvbW0wNnQ3MnFrOXQ0cWFkcGd6In0.1QhAVs5MV4U33Er08CCX0g';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container : 'map',
      style : 'mapbox://styles/mapbox/streets-v11',
      center : [-74.5, 40],
      zoom : 9,
      projection: 'globe'
    })
  },[])
  
  return (
    <>
    <button id="re-render" onClick={() => setRandom(Math.random())}>Re-render</button>
    <div id="map"></div>
    </>
  );
}

export default App;
