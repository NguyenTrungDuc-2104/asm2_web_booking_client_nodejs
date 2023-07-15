import { redirect } from "react-router-dom";
import TransactionTable from "../components/Transaction/TransactionTable";
const TransactionsPage = () => {
  return <TransactionTable />;
};

export default TransactionsPage;

export const loader = async () => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  if (!userLocal) {
    return redirect("/login");
  }
  const [user] = userLocal.user;
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/get_transactions",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user._id,
      },
    }
  );
  if (!response.ok) {
    console.log("get transaction err");
    return null;
  }
  const data = await response.json();

  return data;
};
