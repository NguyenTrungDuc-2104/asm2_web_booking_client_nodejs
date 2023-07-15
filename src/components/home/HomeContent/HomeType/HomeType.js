import hotelImg from "../../../../assets/type_1.webp";
import apartmentsImg from "../../../../assets/type_2.jpg";
import resortsImg from "../../../../assets/type_3.jpg";
import villasImg from "../../../../assets/type_4.jpg";
import cabinsImg from "../../../../assets/type_5.jpg";

import HomeTypeList from "./HomeTypeList";
import styles from "./HomeType.module.css";

const HomeType = ({ hotels }) => {
  const typeHotel = hotels.filter((item) => item.type === "hotel");
  const typeApartments = hotels.filter((item) => item.type === "apartments");
  const typeResorts = hotels.filter((item) => item.type === "resorts");
  const typeVillas = hotels.filter((item) => item.type === "villas");
  const typeCabins = hotels.filter((item) => item.type === "cabins");

  const typeArr = [
    {
      id: 1,
      type: "Hotel",
      imageType: hotelImg,
      count: typeHotel.length + " hotel",
    },
    {
      id: 2,
      type: "Apartments",
      imageType: apartmentsImg,
      count: typeApartments.length + " apartments",
    },
    {
      id: 3,
      type: "Resorts",
      imageType: resortsImg,
      count: typeResorts.length + " resorts",
    },
    {
      id: 4,
      type: "Villas",
      imageType: villasImg,
      count: typeVillas.length + " villas",
    },
    {
      id: 5,
      type: "Cabins",
      imageType: cabinsImg,
      count: typeCabins.length + " cabins",
    },
  ];

  return (
    <div className={styles.container_type}>
      <h1>Browse by property type</h1>
      <div className={styles.content_type}>
        {typeArr.map((item) => {
          return <HomeTypeList key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default HomeType;
