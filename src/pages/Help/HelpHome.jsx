import React from "react";
import { S } from "./style";
import HelpCard from "../../components/Help/HelpCard"
import { useNavigate } from "react-router-dom";

function HelpHome() {

    return (
        <S.Container>
            <S.HelpTitleBox>
                <S.BoldFont>도와주세요!</S.BoldFont>
                <S.LightFont>
                    내 주변에 도움이 필요한 곳을 찾아 바로 나눔과 봉사를 실천해요!
                </S.LightFont>
            </S.HelpTitleBox>
            <HelpCard />
            <HelpCard />
            <HelpCard />
            <HelpCard />
            <HelpCard />
        </S.Container>
    );
}

export default HelpHome;
