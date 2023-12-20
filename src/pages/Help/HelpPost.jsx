import React from "react";
import { S } from "./style";
import HelpCard from "../../components/Help/HelpCard";
import { useNavigate } from "react-router-dom";

function HelpPost() {
    const navigate = useNavigate();

    const handleWriteButtonClick = () => {
        // /homePost 경로로 이동
        navigate("/homePost");
    };

    return (
        <S.Container>

        </S.Container>
    );
}

export default HelpPost;
