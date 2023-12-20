import GlobalLayout from "./pages/_layout";
import RecruitHome from "./pages/Recruit/RecruitHome";
import RecruitForm from "./pages/Recruit/RecruitForm";
import RecruitPost from "./pages/Recruit/RecruitPost";
import LoginPage from "./pages/login/login"
import Registration from "./pages/registration/registration";
import LoginError from "./pages/loginError/loginError";
import MyV_main from "./pages/myVolunteering/main/main";
import Modify from "./pages/modify/modify";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/modify", element: <Modify /> },
      { path: "/myVolunteer_main", element: <MyV_main /> },
      { path: "/loginError", element: <LoginError /> },
      { path: "/registration", element: <Registration /> },
      { path: "/recruitHome", element: <LoginPage /> },
      { path: "/recruitForm", element: <RecruitForm /> }, // 팀원모집 페이지
      { path: "/recruitPost", element: <RecruitPost /> }, // 팀원모집 페이지
      { path: "/recruitHome", element: <RecruitHome /> },
    ],
  },
];

export const pages = [{ route: "/" }];
