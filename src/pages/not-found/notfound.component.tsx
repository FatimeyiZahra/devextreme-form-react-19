import { Button } from "antd";
import { useNotfoundStyles } from "./notfound.style";
import { useNavigate } from "react-router-dom";

const NotfoundComponent = () => {
  const { notfound, notfoundWrapper } = useNotfoundStyles();
  const navigate = useNavigate();
  return (
    <div className={notfound}>
      <div className={notfoundWrapper}>
        <h1>404</h1>
        <h2>Nəsə səhv getdi</h2>
        <p>
          Üzr istəyirik ki, sorğu etdiyiniz səhifə tapılmadı. Zəhmət olmasa ana
          səhifəyə qayıdın
        </p>
        <Button
          onClick={() => navigate("/")}
          color={"blue"}
        >
          Ana səhifəyə qayıt
        </Button>
      </div>
    </div>
  );
};

export default NotfoundComponent;
