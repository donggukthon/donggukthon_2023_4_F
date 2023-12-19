import React from "react";

const ZipCodeInput = ({ onChange, value, placeholder, type }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      // 추가적인 스타일링이나 클래스가 필요하다면 여기에 추가합니다
    />
  );
};

export default ZipCodeInput;
