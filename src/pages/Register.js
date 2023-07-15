import { useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import RegisterForm from "../components/account/RegisterForm";

const RegisterPage = () => {
  const dataAction = useActionData();
  const navigate = useNavigate();
  //---check data trả về từ server xem account đã tồn tại chưa---
  useEffect(() => {
    if (dataAction) {
      if (dataAction.isRegister) {
        window.alert(dataAction.message);
        navigate("/login");
      } else {
        window.alert(dataAction.message);
      }
    }
  }, [dataAction]);

  return <RegisterForm />;
};
export default RegisterPage;

export const action = async ({ request, params }) => {
  const method = request.method;
  const inputValue = await request.formData();
  //---lấy data từ register form---
  const body = {
    username: inputValue.get("username"),
    fullName: inputValue.get("fullName"),
    email: inputValue.get("email"),
    phoneNumber: +inputValue.get("phoneNumber"),
    password: +inputValue.get("password"),
    isAdmin: false,
  };

  const response = await fetch(process.env.REACT_APP_API_URL + "/register", {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.log("register err");
    return null;
  }
  const data = response.json();
  return data;
};
