import { useRouteLoaderData, redirect } from "react-router-dom";
import DetailHeader from "../components/Detail/DetailHeader/DetailHeader";
import DetailImg from "../components/Detail/DetailImg/DetailImg";
import DetailInfo from "../components/Detail/DetailInfo/DetailInfo";
import Card from "../UI/Cart";

const DetailPage = () => {
  const hotelDetail = useRouteLoaderData("detail-hotel");

  return (
    <Card>
      <DetailHeader items={hotelDetail} />
      <DetailImg items={hotelDetail.photos} />
      <DetailInfo items={hotelDetail} />
    </Card>
  );
};

export default DetailPage;

export const loader = async ({ request, params }) => {
  const param = params.detailId;

  const userLocal = JSON.parse(localStorage.getItem("user"));
  if (!userLocal) {
    return redirect("/login");
  }
  const [user] = userLocal.user;

  const response = await fetch(
    process.env.REACT_APP_API_URL + `/detail/${param}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user._id,
      },
    }
  );
  if (!response.ok) {
     console.log("detail loader error");
     return null
  }
  const data = await response.json();

  return data;
};
