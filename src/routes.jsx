import GlobalLayout from "./pages/_layout";
import RecruitHome from "./pages/Recruit/RecruitHome";
import RecruitForm from "./pages/Recruit/RecruitForm";
import RecruitPost from "./pages/Recruit/RecruitPost";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/recruitHome", element: <RecruitHome /> },
      { path: "/recruitForm", element: <RecruitForm /> }, // 팀원모집 페이지
      { path: "/recruitPost", element: <RecruitPost /> }, // 팀원모집 페이지
    ],
  },
];

export const pages = [{ route: "/" }];
