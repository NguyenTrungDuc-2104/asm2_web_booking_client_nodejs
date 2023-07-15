import { useLoaderData } from "react-router-dom";
import HomeCity from "./HomeCity/HomeCity";
import HomeType from "./HomeType/HomeType";
import HomeRating from "./HomeRating/HomeRating";

const HomeContent = () => {
  const dataHotel = useLoaderData();
  const hotels = dataHotel.hotels;
  return (
    <>
      <HomeCity hotels={hotels} />
      <HomeType hotels={hotels} />
      <HomeRating hotels={hotels} />
    </>
  );
};
export default HomeContent;
