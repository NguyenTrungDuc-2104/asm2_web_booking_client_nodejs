import HomeListInfoImg from "./HomeListInfoImg";
import styles from "./HomeListInfo.module.css";

// map ra toan bo hinh anh va props du lieu toi component con
const hotelInfoArr = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const HomeListInfo = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Home guests love</p>
      <div className={styles.content}>
        {hotelInfoArr.map((item, index) => {
          return <HomeListInfoImg key={index} items={item} />;
        })}
      </div>
    </div>
  );
};
export default HomeListInfo;
