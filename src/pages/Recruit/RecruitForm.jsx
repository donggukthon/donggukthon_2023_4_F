import React, { useState, useRef } from "react";
import Calendar from "../../components/Recruit/Calendar/Calendar";
import DaumPostcode from "react-daum-postcode";
import { S, F, M } from "./style";
import ZipCodeInput from "../../components/Recruit/Address/ZipCodeInput";
import { useNavigate } from "react-router-dom";

function RecruitForm() {
  // 입력값 처리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState([]);
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [due_date, setDue_date] = useState("");
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

  const inputText = (event) => {
    setInputValue(event.target.value);
  };

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
  const testCode = () => {
    console.log("start:", start_date);
    console.log("end:", end_date);
    console.log("due:", due_date);
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
          startDate={start_date}
          setStartDate={setStart_date}
          endDate={end_date}
          setEndDate={setEnd_date}
        />

        <div>
          <F.ColoredFormFont>신청 마감 일자</F.ColoredFormFont>
          <F.FormFont>을 입력해주세요</F.FormFont>
        </div>
        <Calendar isRange={false} dueDate={due_date} setDueDate={setDue_date} />
        <button onClick={testCode}>버튼</button>
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
