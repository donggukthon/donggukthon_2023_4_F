import React, { useState, useRef } from "react";
import Calendar from "../../components/Recruit/Calendar/Calendar";
import DaumPostcode from "react-daum-postcode";
import { S, F, M } from "./style";
import ZipCodeInput from "../../components/Recruit/Address/ZipCodeInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RecruitForm() {
  // 입력값 처리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [person, setPerson] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [inputValue, setInputValue] = "";
  const [modalState, setModalState] = useState(false); // 모달 상태 관리
  const [inputAddress, setInputAddress] = useState(""); // 주소 상태 관리
  const [inputZipCode, setInputZipCode] = useState(""); // 우편번호 상태 관리
  const [showConfirmModal, setShowConfirmModal] = useState(false); // 모달 관리
  const thumbnailInput = useRef();
  const navigate = useNavigate();

  // 입력값에 따른 handleChange
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log("title입력값", e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
    console.log("content입력값", e.target.value);
  };
  const handleTagChange = (e) => {
    const inputTags = e.target.value;
    const tagsArray = inputTags.split("#").filter((tag) => tag.trim() !== "");
    setTag(tagsArray);
  };
  const handlePersonChange = (e) => {
    setPerson(e.target.value);
    console.log("person입력값", e.target.value);
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

  // 주소 검색 누르면 나오는 포스트카드
  const postCodeStyle = {
    width: "300px",
    height: "300px",
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

  //모달 관련
  const handleUploadClick = () => {
    setShowConfirmModal(true);
  };
  const handleConfirm = () => {
    // POST 요청을 여기서 처리
    setShowConfirmModal(false);
    navigate(`/recruitPost`);
  };
  const handleCancel = () => {
    setShowConfirmModal(false);
    navigate(`/recruitHome`);
  };

  // 날짜가져오는지 테스트
  // const testCode = () => {
  //   console.log("start:", start_date);
  //   console.log("end:", end_date);
  //   console.log("due:", due_date);
  // };

  // Java의 LocalDateTime 형식에 맞게 날짜를 포맷팅하는 함수
  const formatDateForLocalDateTime = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}T00:00:00`;
  };

  // 달력 시간 localDataTime 관련
  const submitData = () => {
    const formattedStartDate = formatDateForLocalDateTime(startDate);
    const formattedEndDate = formatDateForLocalDateTime(endDate);
    const formattedDueDate = formatDateForLocalDateTime(dueDate);

    // 여기에서 서버로 데이터 전송
    console.log(formattedStartDate, formattedEndDate, formattedDueDate);
    // 예: axios.post('/api/data', { formattedStartDate, formattedEndDate, formattedDueDate });
  };

  // 주소 위도 경도 관련
  const API_KEY = "AIzaSyCjXg90oMZF6DW0GoDdlFmOwtRFGGYY6DI";
  const convertAddressToCoords = async (address) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: address,
            key: API_KEY, // 여기에 발급받은 API 키를 입력합니다.
          },
        }
      );

      if (response.data.status === "OK") {
        const coords = response.data.results[0].geometry.location;
        console.log(coords); // 로그를 여기로 이동
        return coords; // { lat: 위도, lng: 경도 }
      } else {
        console.log(response.data.status);
        console.log(response.data);
        throw new Error("주소 변환에 실패했습니다.");
      }
    } catch (error) {
      console.error("Geocoding Error:", error);
      return null;
    }
  };

  const handleTest = (inputAddress) => {
    convertAddressToCoords(inputAddress).then((coords) => {
      console.log(coords); // 위도와 경도 출력
      console.log("fs");
    });
  };

  return (
    <S.Container>
      <S.CardBox>
        <div>
          <F.ColoredFormFont>봉사활동 기간</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <Calendar
          isRange={true}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <div>
          <F.ColoredFormFont>신청 마감 일자</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <Calendar isRange={false} dueDate={dueDate} setDueDate={setDueDate} />
        <button onClick={submitData}>버튼</button>
        <div>
          <F.ColoredFormFont>활동 인원</F.ColoredFormFont>
          <F.FormFont>을 선택해주세요</F.FormFont>
        </div>
        <input value={person} onChange={handlePersonChange} />

        <div>
          <F.ColoredFormFont>활동 장소</F.ColoredFormFont>
          <F.FormFont>을 선택해주세요</F.FormFont>
        </div>
        {/* <div>
          <F.ColoredFormFont>우편번호</F.ColoredFormFont>
          <ZipCodeInput
            onChange={handleZipCode}
            value={inputZipCodeValue}
            placeholder="우편번호"
            type="text"
          />
        </div> */}
        <div>
          <button onClick={() => setModalState(!modalState)}>주소 검색</button>
        </div>
        <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
        <F.CalendarDiv>{inputAddress}</F.CalendarDiv>
        {/* 상세 주소 넣을 input */}
        <input></input>
        <button onClick={() => handleTest(inputAddress)}>버튼</button>

        <div>
          <F.ColoredFormFont>제목</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <input value={title} onChange={handleTitleChange} />

        <div>
          <F.ColoredFormFont>내용</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <textarea
          placeholder="1000자 이내 작성"
          value={content}
          onChange={handleContentChange}
        ></textarea>

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
          <F.ColoredFormFont onClick={console.log(tag)}>태그</F.ColoredFormFont>
          <F.FormFont>를 입력해주세요</F.FormFont>
        </div>
        <input
          placeholder="#장충동#목도리#봉사자모집#겨울봉사"
          onChange={handleTagChange}
        ></input>

        <F.UploadButton onClick={handleUploadClick} />
        <ConfirmModal
          show={showConfirmModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </S.CardBox>
    </S.Container>
  );

  function ConfirmModal({ show, onConfirm, onCancel }) {
    if (!show) {
      return null;
    }

    return (
      <M.ModalBox>
        <p>Volunmate</p>
        <p>글을 등록하시겠습니까?</p>
        <M.RowBox>
          <M.ModalButton onClick={onConfirm}>
            <M.WhiteFont>등록할게요</M.WhiteFont>
          </M.ModalButton>
          <M.ModalButton onClick={onCancel}>
            <M.WhiteFont>하지 않는다</M.WhiteFont>
          </M.ModalButton>
        </M.RowBox>
      </M.ModalBox>
    );
  }
}

export default RecruitForm;
