import HomeListCityImg from "./HomeListCityImg";

import styles from "./HomeListCity.module.css";

// map ra toan bo hinh anh trong list city va props du lieu toi component con

const homeCityArr = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const HomeListCity = () => {
  return (
    <div className={styles.container}>
      {homeCityArr.map((item, index) => {
        return <HomeListCityImg key={index} items={item} />;
      })}
    </div>
  );
};
export default HomeListCity;
