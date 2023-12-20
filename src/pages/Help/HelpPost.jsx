import React from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";

function HelpPost() {
    const navigate = useNavigate();

    const handleWriteButtonClick = () => {
        // /homePost 경로로 이동
        navigate("/helpHome");
    };

    return (
        <S.Container>
            <S.HelpTitleBox>
                <S.BoldFont>도와주세요! 글쓰기</S.BoldFont>
                <S.LightFont>
                    * 모두 필수 입력 값입니다.
                </S.LightFont>
            </S.HelpTitleBox>
            <S.CardBox>
                <S.InputTitle>빠른 시일 내에 도움이 필요하신가요?</S.InputTitle>

                <S.InputTitle>제목을 입력해주세요</S.InputTitle>
                <textarea placeholder="50자 이내 작성"></textarea>
                <S.InputTitle>내용을 입력해주세요</S.InputTitle>
                <textarea placeholder="1000자 이내 작성"></textarea>

            </S.CardBox>

            {/* WriteButton에 onClick 이벤트 추가 */}
            <S.WriteButton onClick={handleWriteButtonClick}>
                도움 요청하기
            </S.WriteButton>

        </S.Container >
    );
}
export default HelpPost;
