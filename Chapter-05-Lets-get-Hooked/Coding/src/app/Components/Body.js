import RestaurantCard from "./ResturantCard";
import {restaurantList} from "../constants";
import {useState} from "react";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [resturants, setResturants] = useState(restaurantList);

  filterResturants = (searchInput, resturants) => {
    return (resturants || []).filter((resturant) =>
      resturant?.data?.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterResturants(searchInput, restaurantList);
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {resturants.map((restaurantList) => {
          return (
            <RestaurantCard
              {...restaurantList?.data}
              key={restaurantList?.data?.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
