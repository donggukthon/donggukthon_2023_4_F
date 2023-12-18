import GlobalLayout from "./pages/_layout";
import RecruitHome from "./pages/Recruit/RecruitHome";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <RecruitHome /> }, // 팀원모집 페이지
    ],
  },
];

export const pages = [{ route: "/" }];
