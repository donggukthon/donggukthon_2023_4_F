import GlobalLayout from "./pages/_layout";
import RecruitHome from "./pages/Recruit/RecruitHome";
import RecruitForm from "./pages/Recruit/RecruitForm";
import RecruitPost from "./pages/Recruit/RecruitPost";
import MainHome from "./pages/Home/MainHome";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/recruitHome", element: <RecruitHome /> }, // 팀원모집 리스트 페이지
      { path: "/recruitForm", element: <RecruitForm /> }, // 팀원모집 글 쓰기 페이지
      { path: "/recruitPost", element: <RecruitPost /> }, // 팀원모집 디테일 페이지
      { path: "/mainHome", element: <MainHome /> }, // 메인 페이지
    ],
  },
];

export const pages = [{ route: "/" }];
