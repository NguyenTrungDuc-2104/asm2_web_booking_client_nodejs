import HomeRatingList from "./HomeRatingList";
import styles from "./HomeRating.module.css";
const HomeRating = ({ hotels }) => {
  const hotelsSort = hotels
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 3);
  return (
    <div className={styles.container_rating}>
      <h1>Homes guests love</h1>
      <div className={styles.content_rating}>
        {hotelsSort.map((item) => {
          return <HomeRatingList key={item._id} hotels={item} />;
        })}
      </div>
    </div>
  );
};

export default HomeRating;
