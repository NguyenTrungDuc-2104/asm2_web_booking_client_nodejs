import { useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "../store/slice/user";
import LoginForm from "../components/account/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const dataAction = useActionData();
  const navigate = useNavigate();

  // check dữ liệu trả về từ server xem đăng nhập có thành công hay không
  useEffect(() => {
    if (dataAction) {
      if (dataAction.isLogin) {
        localStorage.setItem("user", JSON.stringify(dataAction));
        dispatch(userAction.on_login(dataAction.user));
        navigate("/");
      } else {
        window.alert("Incorrect account or password");
      }
    }
  }, [dataAction]);

  return <LoginForm />;
};
export default LoginPage;

export const action = async ({ request, params }) => {
  const method = request.method;
  const valueInput = await request.formData();
  // lấy data từ form login
  const body = {
    email: valueInput.get("email"),
    password: +valueInput.get("password"),
  };

  const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.log("login err");
    return null;
  }
  const data = await response.json();

  return data;
};
