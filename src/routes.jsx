import GlobalLayout from "./pages/_layout";
import RecruitHome from "./pages/Recruit/RecruitHome";
import RecruitForm from "./pages/Recruit/RecruitForm";
import RecruitPost from "./pages/Recruit/RecruitPost";
import MainHome from "./pages/Home/MainHome";
import HelpHome from "./pages/Help/HelpHome";
import MyPage from "./pages/MyPage/Main";
import MyVolunmate from "./pages/MyPage/MyVolunmate";
import UserInfo from "./pages/MyPage/UserInfo";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/recruitHome", element: <RecruitHome /> }, // 팀원모집 리스트 페이지
      { path: "/recruitForm", element: <RecruitForm /> }, // 팀원모집 글 쓰기 페이지
      { path: "/recruitPost", element: <RecruitPost /> }, // 팀원모집 디테일 페이지
      { path: "/mainHome", element: <MainHome /> }, // 메인 페이지
      { path: "/myPage", element: <MyPage /> }, // 메인 페이지
      { path: "/helpHome", element: <HelpHome /> }, // 도와주세요 홈
      { path: "/myVolunmate", element: <MyVolunmate /> },
      { path: "/userInfo", element: <UserInfo /> },
    ],
  },
];

export const pages = [{ route: "/" }];
