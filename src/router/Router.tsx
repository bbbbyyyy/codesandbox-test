import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginuserProvider";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          ></Route>
        ))}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </LoginUserProvider>
  );
});
