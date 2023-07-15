import HomeListTypeImg from "./HomeListTypeImg";
import styles from "./HomeListType.module.css";

// map ra toan bo hinh anh va props du lieu toi component con
const typeArr = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];
const HomeListType = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Browse by property type</p>
      <div className={styles.content}>
        {typeArr.map((item, index) => {
          return <HomeListTypeImg key={index} items={item} />;
        })}
      </div>
    </div>
  );
};
export default HomeListType;
