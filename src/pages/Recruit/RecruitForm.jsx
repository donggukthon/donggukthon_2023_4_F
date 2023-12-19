import React, { useState } from "react";
import Calendar from "../../components/Recruit/Calendar/Calendar";
import DaumPostcode from "react-daum-postcode";
import { S, F } from "./style";
import ZipCodeInput from "../../components/Recruit/Address/ZipCodeInput";

function RecruitForm() {
  const [inputValue, setInputValue] = useState("");
  const [modalState, setModalState] = useState(false); // 모달 상태 관리
  const [inputAddress, setInputAddress] = useState(""); // 주소 상태 관리
  const [inputZipCode, setInputZipCode] = useState(""); // 우편번호 상태 관리

  const inputText = (event) => {
    setInputValue(event.target.value);
  };

  // 상태 변수 선언
  const [inputZipCodeValue, setInputZipCodeValue] = useState("");

  const handleZipCode = (event) => {
    setInputZipCodeValue(event.target.value);
    console.log(event.target);
  };

  const onCompletePost = (data) => {
    setInputZipCodeValue(data.zonecode); // DaumPostcode에서 선택한 우편번호로 상태 업데이트
    setInputAddress(data.address);
  };

  const postCodeStyle = {
    width: "400px",
    height: "400px",
    display: modalState ? "block" : "none",
  };

  // const onCompletePost = (data) => {
  //   setModalState(false);
  //   setInputAddress(data.address);
  //   setInputZipCode(data.zonecode);
  // };

  return (
    <S.Container>
      <S.CardBox>
        <div>
          <F.ColoredFormFont>봉사활동 기간</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <Calendar isRange={true} />
        <div>
          <F.ColoredFormFont>신청 마감 일자</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <Calendar isRange={false} />
        <div>
          <F.ColoredFormFont>활동 인원</F.ColoredFormFont>
          <F.FormFont>을 선택해주세요</F.FormFont>
        </div>
        <input value={inputValue} onChange={inputText} />
        <div>
          <F.ColoredFormFont>활동 장소</F.ColoredFormFont>
          <F.FormFont>을 선택해주세요</F.FormFont>
        </div>
        <div>
          <F.ColoredFormFont>우편번호</F.ColoredFormFont>
          <ZipCodeInput
            onChange={handleZipCode}
            value={inputZipCodeValue}
            placeholder="우편번호"
            type="text"
          />
        </div>
        <div>
          <button onClick={() => setModalState(!modalState)}>주소 검색</button>
        </div>
        <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
        <F.CalendarDiv />
        <div>선택된 주소: {inputAddress}</div>
        <F.CalendarDiv />
        <div>
          <F.ColoredFormFont>제목</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <F.CalendarDiv />
      </S.CardBox>
    </S.Container>
  );
}

export default RecruitForm;
