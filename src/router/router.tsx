import { createBrowserRouter } from "react-router-dom";
// import PublicComponent from "core/layouts/public/public.component";
import { Routes } from "./routes";
import AuthProtectedComponent from "./protected/auth-protected.component";
import AuthComponent from "../layouts/auth/auth.component";
import NotfoundComponent from "../pages/not-found/notfound.component";
import PublicComponent from "../layouts/public/public.component";
import UserSetting from "..//pages/setting-users/setting-users.component";

const router = createBrowserRouter(
  [
    {
      element: (
        <AuthProtectedComponent layout="public">
          <PublicComponent />
        </AuthProtectedComponent>
      ),
      handle: {
        crumb: () => "home",
      },
      children: [
        {
          path: Routes.user,
          element: <UserSetting />,
        },
      ],
    },
    {
      path: Routes.auth,
      element: (
        <AuthProtectedComponent layout="auth">
          <AuthComponent />
        </AuthProtectedComponent>
      ),
      children: [],
    },
    {
      path: "*",
      element: <NotfoundComponent />,
    },
  ],
  { basename: "/" }
);

export default router;
