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

const mapOptions = {
  disableDefaultUI: true, // 기본 UI 컨트롤 비활성화
  zoomControl: false, // 확대/축소 컨트롤 비활성화
  scrollwheel: false, // 마우스 휠로 확대/축소 비활성화
  // gestureHandling: "none", // 드래그와 핀치 줌(터치)을 통한 확대/축소 비활성화
};

function Googlemap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCjXg90oMZF6DW0GoDdlFmOwtRFGGYY6DI" // 여기에 API 키를 입력하세요.
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={mapOptions}
      >
        {/* 자식 컴포넌트, 마커 등 추가 가능 */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Googlemap;
