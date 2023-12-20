import React, { useState } from "react";
import { Style } from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import StatisticBox from "../../../components/MyPage/StatisticBox";
import participants from "../../../assets/Icon/participants.svg";
import pin from "../../../assets/Icon/pin.svg";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb2NpYWxJZCI6IjExMTI4ODk4NzU0ODc4NDkxNjk0NSIsImlhdCI6MTcwMzAyOTQwOSwiZXhwIjoxNzAzMTE1ODA5fQ.LGWDzOhVatSSWAbGvJpdBAc-ByiqlUkhtfzUPhdILy0";

function MyPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [mate, setMate] = useState("");
  const [help, setHelp] = useState("");
  const [heart, setHeart] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://volunmate.site/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setName(response.data.data.name);
          setDegree(response.data.data.degree);
          setMate(response.data.data.mate);
          setHelp(response.data.data.help);
          setHeart(response.data.data.heart);
          setLatitude(response.data.data.latitude);
          setLongitude(response.data.data.longitude);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <Style.Container>
      <Style.NameContainer>
        <div>{name}님,</div>
        <Style.Button>회원 정보 수정</Style.Button>
      </Style.NameContainer>
      <Style.Greeting>
        🌡 {degree}도의 온도로 세상을 더 따뜻하게 만들고 있어요 :)
      </Style.Greeting>
      <StatisticBox number={mate} label="내가 등록한 팀원모집" />
      <StatisticBox number={help} label="내가 등록한 도와주세요!" />
      <StatisticBox number={heart} label="좋아요한 글" />"
      <Style.ImageContainer>
        <Style.IconImage src={participants} alt="Participants" />
        대기 중인 참여 신청
      </Style.ImageContainer>
      <Style.ImageContainer>
        <Style.IconImage src={pin} alt="Pin" />
        참여자 관리
      </Style.ImageContainer>
    </Style.Container>
  );
}

export default MyPage;
