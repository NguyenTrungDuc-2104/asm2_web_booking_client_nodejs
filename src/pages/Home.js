import { redirect } from "react-router-dom";
import HomeHeader from "../components/home/HomeHeader/HomeHeader";
import Card from "../UI/Cart";
import HomeContent from "../components/home/HomeContent/HomeContent";
const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Card>
        <HomeContent />
      </Card>
    </>
  );
};
export default HomePage;

export const loader = async ({ request, params }) => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  if (!userLocal) {
    return redirect("/login");
  }
  const [user] = userLocal.user;

  const response = await fetch(process.env.REACT_APP_API_URL + "/get_hotel", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user._id,
    },
  });
  if (!response.ok) {
    console.log("loader home error");
    return null;
  }
  const data = await response.json();
  return data;
};
//---------------------action search-------------------
export const action = async ({ request, params }) => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  if (!userLocal) {
    return redirect("/login");
  }
  const [user] = userLocal.user;

  const method = request.method;
  const valueInput = await request.formData();

  const destination = valueInput.get("destination");
  const [dateStart, dateEnd] = valueInput.get("date").split(" to ");
  const peopleNumber = valueInput.get("peopleRoom").split("-");
  const ault = peopleNumber[0] ? +peopleNumber[0] : 0;
  const children = peopleNumber[1] ? +peopleNumber[1] : 0;
  const room = peopleNumber[2] ? +peopleNumber[2] : 0;

  const body = {
    destination,
    dateStart,
    dateEnd,
    ault,
    children,
    room,
  };

  const response = await fetch(
    process.env.REACT_APP_API_URL + "/search_hotel",
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user._id,
      },
      body: JSON.stringify(body),
    }
  );
  if (!response.ok) {
    console.log("search error");
    return null;
  }

  const data = await response.json();

  return data;
};
