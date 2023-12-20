import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "340px",
  height: "250px",
};

const center = {
  lat: 37.5584713,
  lng: 126.996291,
};

function Googlemap() {
  const API_KEY = "AIzaSyCjXg90oMZF6DW0GoDdlFmOwtRFGGYY6DI";
  return (
    <LoadScript
      googleMapsApiKey={API_KEY} // 여기에 API 키를 입력하세요.
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* 자식 컴포넌트, 마커 등 추가 가능 */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Googlemap;
