import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { width } from "@mui/system";
const calendar = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };
  const defaultCenter = {
    lat: 40.74,
    lng: -73.98,
  };
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};
export default calendar;
