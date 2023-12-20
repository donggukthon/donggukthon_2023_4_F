import React from "react";
import { S } from "./style";
import HelpCard from "../../components/Help/HelpCard";
import HelpCard2 from "../../components/Help/HelpCard2";
import HelpCard3 from "../../components/Help/HelpCard3";
import HelpCard4 from "../../components/Help/HelpCard4";
import { useNavigate } from "react-router-dom";

function HelpHome() {
    const navigate = useNavigate();

    const handleWriteButtonClick = () => {
        // /homePost 경로로 이동
        navigate("/helpPost");
    };

    const handleCardClick = () => {
        // /homeDetail 경로로 이동
        console.log("Card clicked!");
        navigate("/helpDetail");
    };

    return (
        <S.Container>
            <S.HelpTitleBox>
                <S.BoldFont>도와주세요!</S.BoldFont>
                <S.LightFont>
                    내 주변에 도움이 필요한 곳을 찾아 바로 나눔과 봉사를 실천해요!
                </S.LightFont>
            </S.HelpTitleBox>
            <HelpCard onClick={handleCardClick} />
            <HelpCard2 onClick={handleCardClick} />
            <HelpCard3 onClick={handleCardClick} />
            <HelpCard4 onClick={handleCardClick} />
            {/* WriteButton에 onClick 이벤트 추가 */}
            <S.WriteButton onClick={handleWriteButtonClick}>
                도움 요청하기
            </S.WriteButton>
        </S.Container>
    );
}

export default HelpHome;
