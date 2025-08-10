import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import UserSetting from "./pages/setting-users/setting-users.component";
import 'devextreme/dist/css/dx.light.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserSetting />
  </StrictMode>
);
