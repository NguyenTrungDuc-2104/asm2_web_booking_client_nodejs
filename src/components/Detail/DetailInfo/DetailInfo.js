import DetailInfoText from "./DetailInfoText";
import DetailInfoCard from "./DetailInfoCard";
import styles from "./DetailInfo.module.css";

//component chua toan bo thong tin detail
const DetailInfo = (props) => {
  return (
    <div className={styles.container}>
      <DetailInfoText items={props.items} />
      <DetailInfoCard items={props.items} />
    </div>
  );
};
export default DetailInfo;
