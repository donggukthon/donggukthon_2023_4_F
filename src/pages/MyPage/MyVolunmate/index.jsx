import { useEffect, useState } from "react";
import { Style } from "./style";
import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb2NpYWxJZCI6IjExMTI4ODk4NzU0ODc4NDkxNjk0NSIsImlhdCI6MTcwMzAyOTQwOSwiZXhwIjoxNzAzMTE1ODA5fQ.LGWDzOhVatSSWAbGvJpdBAc-ByiqlUkhtfzUPhdILy0";

const MyVolunmate = () => {
  const [status, setStatus] = useState("");
  const [length, setLength] = useState(0);

  const fetchData = async () => {
    await axios
      .get("https://volunmate.site/api/me/team", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLength(response.data.data.res.length);
        if (length == 0) {
          setStatus(false);
        } else setStatus(true);
      });
  };
  useEffect(() => {
    fetchData();
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
