import React from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";

function HelpDetail() {
    const navigate = useNavigate();


    return (
        <S.Container>
            <S.CardImg src="../../src/assets/img/snow.jpeg" />
            <S.Input>
                <S.Info>
                    <S.Address src="../../src/assets/img/address.png" />
                    <S.HurryImg src="../../src/assets/img/hurry.png" />
                </S.Info>
                <S.HorizontalLine />
                <S.InputTitle>눈 쓸기 도와주세요..</S.InputTitle>
                <S.InputContent>이번에 내린 폭설로 집 앞이 다 눈으로 쌓여 있어 밖으로 나갈 수가 없습니다.. 도와주세요...
                </S.InputContent>
                <S.InputTitle>요청자 정보</S.InputTitle>
                <S.InputContent>이름 | 곽호은</S.InputContent>
                <S.InputContent>나눔 온도 | 38.5도</S.InputContent>
                <S.InputContent>카카오톡 아이디 | kheee2010</S.InputContent>

                <S.InputTitle>봉사 희망 장소</S.InputTitle>
                <S.InputContent>서울특별시 중구 필동</S.InputContent>
            </S.Input>

        </S.Container>
    );
}

export default HelpDetail;
