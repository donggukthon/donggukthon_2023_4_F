import GlobalLayout from "./pages/_layout";
import RecruitHome from "./pages/Recruit/RecruitHome";
import LoginPage from "./pages/login/login"
import Registration from "./pages/registration/registration";
import LoginError from "./pages/loginError/loginError";
import MyV_main from "./pages/myVolunteering/main/main";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/myVolunteer_main", element: <MyV_main /> },
      { path: "/loginError", element: <LoginError /> },
      { path: "/registration", element: <Registration /> },
      { path: "/", element: <LoginPage /> }, // 팀원모집 페이지
      { path: "/recruitHome", element: <RecruitHome /> },
    ],
  },
];

export const pages = [{ route: "/" }];
