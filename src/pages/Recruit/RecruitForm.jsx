import React, { useState, useRef } from "react";
import Calendar from "../../components/Recruit/Calendar/Calendar";
import DaumPostcode from "react-daum-postcode";
import { S, F } from "./style";
import ZipCodeInput from "../../components/Recruit/Address/ZipCodeInput";

function RecruitForm() {
  const [inputValue, setInputValue] = useState("");
  const [modalState, setModalState] = useState(false); // 모달 상태 관리
  const [inputAddress, setInputAddress] = useState(""); // 주소 상태 관리
  const [inputZipCode, setInputZipCode] = useState(""); // 우편번호 상태 관리
  const thumbnailInput = useRef();

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

  const handleClick = () => {
    thumbnailInput.current.click();
  };

  // 이미지 업로드
  const saveFileImage = async (e) => {
    try {
      const formData = new FormData(); // formData 생성
      formData.append("image", e.target.files[0]); // 이미지 파일 값 할당

      const config = {
        headers: {
          // Authorization: ...,  // 토큰 넣어주기
          "Content-Type": "multipart/form-data", // 데이터 형식 지정
        },
      };
      // 이미지 업로드 중
      const response = await axios.post(`api url`, formData, config); // api 통신
      // 이미지 업로드 성공
      dispatch(
        setWriteContent({
          type: "thumbnail",
          value: `${response.data.imageUrl[0]}`,
        })
      );
    } catch (error) {
      // 이미지 업로드 실패
    }
  };
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
        <F.CalendarDiv>{inputAddress}</F.CalendarDiv>
        {/* 상세 주소 넣을 input */}
        <input></input>

        <div>
          <F.ColoredFormFont>제목</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <input></input>

        <div>
          <F.ColoredFormFont>내용</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <textarea placeholder="1000자 이내 작성"></textarea>

        <div>
          <F.ColoredFormFont>사진</F.ColoredFormFont>
          <F.FormFont>을 등록해주세요</F.FormFont>
        </div>
        <button onClick={handleClick}>
          사진 첨부
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            multiple
            ref={thumbnailInput}
            onChange={saveFileImage}
            style={{ display: "none" }}
          />
        </button>

        <div>
          <F.ColoredFormFont>태그</F.ColoredFormFont>
          <F.FormFont>를 입력해주세요</F.FormFont>
        </div>
        <input placeholder="#장충동#목도리#봉사자모집#겨울봉사"></input>

        <F.UploadButton />
      </S.CardBox>
    </S.Container>
  );
}

export default RecruitForm;
