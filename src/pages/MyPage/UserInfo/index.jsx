import instance from "../../../api/axios";
import { Style } from "./style";
import { useState } from "react";

const handleSubmit = async (name, kakao_id, latitude, longitude) => {
  try {
    await instance.patch("https://volunmate.site/api/me", {
      name: name,
      kakao_id: kakao_id,
      latitude: latitude,
      longitude: longitude,
    });
  } catch (error) {
    console.log(error);
  }
};

const UserInfo = () => {
  const [name, setName] = useState("");
  const [kakao_id, setKakao_id] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  return (
    <Style.Container>
      <Style.Label>이름</Style.Label>
      <Style.Input text="김온도" value={name} onChange={setName} />
      <Style.Label>카카오톡 아이디</Style.Label>
      <Style.Input text="dgu1234" value={kakao_id} onChange={setKakao_id} />
      <Style.Label>설정된 위치</Style.Label>
      <Style.Label>위치 수정하기</Style.Label>
      <Style.Button onClick={handleSubmit(name, kakao_id, latitude, longitude)}>
        회원정보 수정하기
      </Style.Button>
    </Style.Container>
  );
};

export default UserInfo;
