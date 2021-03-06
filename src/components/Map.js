import React, { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

const data = require('../smartMapJson.json')

function Map() {

  const REACT_APP_MAPBOX_TOKEN="pk.eyJ1IjoiYWhtZWRvdS15YWh5YSIsImEiOiJja3JueHU3aHoxYWtrMm5sN2tjeXI1OTI4In0.9tCPRBIsC_cwCLx9Xq6q3g"

  const [viewport, setViewport] = useState({
    latitude: 18.079021, 
    longitude: -15.965662,
    width: '100vw',
    height: '100vh',
    zoom:7
  })

  const mapStyle = [
    "mapbox://styles/ahmedou-yahya/cks7gpm6065um18qqm9n8c1za",
    "mapbox://styles/ahmedou-yahya/ckror3xkjdf3e19nzx6ndrgix",
    "mapbox://styles/ahmedou-yahya/cks7gtjfq7kpi17q6jf9duncd"
  ]
  const newData = data.datas.smart_map.clients.map((client) =>{
    return (
      <Marker 
                key={Number(client.me_id)}
                latitude={Number(client.me_lat)}
                longitude={Number(client.me_lng)}
                >
                  <h3>Marker</h3>
      </Marker>
    )
  })
  return (
    <div className="map">
        <ReactMapGL
          {...viewport} 
          mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport)=>{
            setViewport(viewport)
          }}

          mapStyle={mapStyle[2]}
          pitch = {60} 
          bearing = {-60}
        >
          {newData}
          <h1>Hi there</h1>
        </ReactMapGL>
    </div>
    
  );
}


export default Map;