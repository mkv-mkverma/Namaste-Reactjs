import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCopyright,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  const URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="card">
      <img alt="food" src={URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4 style={avgRating < 4 ? {backgroundColor: "red"} : {color: "white"}}>
          <FontAwesomeIcon icon={faStar} />
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
