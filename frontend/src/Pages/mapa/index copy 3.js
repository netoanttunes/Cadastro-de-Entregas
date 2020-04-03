import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, DirectionsRenderer, DirectionsService} from 'react-google-maps'


function Map(){
    const [origin, setOrigin] = useState ('Rua Alexandrina Mendes de oliveira, 8, Nova Iguaçu, RJ')
    const [destination, setDestination] = useState('Rua Francisco de Arruda Camara, 251, NovaIguaçu,RJ')
    const [directions, setDirections] = useState([])
   
    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin=Rua+Alexandrinha+Mendes+de+oliveira+NovaIguacu+rj&destination=Rua+Francisco+de+Arruda+Camara+&key=AIzaSyDRTNAmthkEHOo5uo_DZaENLYV7GoGwDsU');
          const data = await response.json();
          setDirections(data);
          console.log(data);
          
          }
        fetchData();
      }, []);
       


    return(
        <GoogleMap 
            defaultZoom = {10}
            defaultCenter= {{ lat: -22.949258  , lng: -43.1633305}}
        >
        <DirectionsRenderer 
      directions={directions}
 />    
        </GoogleMap>
    );
}

const CorpodoMap = withScriptjs(withGoogleMap(Map));

export default function Mapa( ) {
    return(
        <div style={{width: "100vw", height: "100vh"}}>
            <CorpodoMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                libraries=geometry.drawing.place&key=AIzaSyDRTNAmthkEHOo5uo_DZaENLYV7GoGwDsU`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height:"100%" }} />}
        />
        </div>
    )
}