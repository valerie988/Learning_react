import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../App.css";
const map = () => {
  const mapStyles = {
    height: "340px",
    width: "90%",
    padding: "10px",
    backgroundColor: "white",
    border: "1px solid gray",
  };
  const defaultCenter = {
    lat: 40.74,
    lng: -73.98,
  };
  return (
    <div className="Google Maps">
      <h1>Google Maps</h1>
      <div className="map">
        <p>React Google Maps</p>
        <LoadScript googleMapsApiKey="">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
export default map;
