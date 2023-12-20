import { useEffect, useState } from "react";
import { Style } from "./style";
import instance from "../../../api/axios";

const MyVolunmate = () => {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    await instance
      .get("https://volunmate.site/api/me/team")
      .then((response) => {
        setApiData(response.data.data);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(apiData);
  }, []);
  return (
    <Style.Container>
      <Style.Header>
        <Style.Heading>대기 중인 참여 신청</Style.Heading>
        <Style.Content>
          총 <Style.Highlight>{length}</Style.Highlight>명의 Volunmate가 봉사
          신청 승인을 기다리고 있어요!
        </Style.Content>
      </Style.Header>
      <Style.Divider />
    </Style.Container>
  );
};

export default MyVolunmate;
