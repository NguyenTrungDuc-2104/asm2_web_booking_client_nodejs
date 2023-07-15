import stlyes from "./HomeListCityImg.module.css";

// component con trong list city
const HomeListCityImg = (props) => {
  return (
    <div className={stlyes.container}>
      <img src={props.items.image} className={stlyes.img} />
      <div className={stlyes.text}>
        <p>{props.items.name}</p>
        <p>{props.items.subText}</p>
      </div>
    </div>
  );
};
export default HomeListCityImg;
