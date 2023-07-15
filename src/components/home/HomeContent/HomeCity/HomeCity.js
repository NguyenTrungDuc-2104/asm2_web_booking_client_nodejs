import { useState, useEffect } from "react";
import HaNoiImg from "../../../../assets/Ha Noi.jpg";
import DaNangImg from "../../../../assets/Da Nang.jpg";
import HCMImg from "../../../../assets/HCM.jpg";
import styles from "./HomeCity.module.css";

const HomeCity = ({ hotels }) => {
  const [propHaNoi, setPropHaNoi] = useState(0);
  const [propDaNang, setPropDaNang] = useState(0);
  const [propHCM, setPropHCM] = useState(0);

  //------------------------------------------
  const haNoiData = hotels.filter((item) => item.city === "Ha Noi");
  const daNangData = hotels.filter((item) => item.city === "Da Nang");
  const hcmData = hotels.filter((item) => item.city === "Ho Chi Minh");
  //------------------------------------------------
  useEffect(() => {
    if (haNoiData.length > 0) {
      setPropHaNoi(haNoiData.length);
    }
    if (daNangData.length > 0) {
      setPropDaNang(daNangData.length);
    }
    if (hcmData.length > 0) {
      setPropHCM(hcmData.length);
    }
  }, [haNoiData, daNangData, hcmData]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={HaNoiImg} alt="Ha Noi" />
        <div className={styles.text}>
          <p>Ha Noi</p>
          <p> {propHaNoi} properties</p>
        </div>
      </div>

      <div className={styles.content}>
        <img src={HCMImg} alt="Ho Chi Minh" />
        <div className={styles.text}>
          <p>Ho Chi Minh</p>
          <p>{propHCM} properties</p>
        </div>
      </div>

      <div className={styles.content}>
        <img src={DaNangImg} alt="Da Nang" />
        <div className={styles.text}>
          <p>Da Nang</p>
          <p>{propDaNang} properties</p>
        </div>
      </div>
    </div>
  );
};
export default HomeCity;
