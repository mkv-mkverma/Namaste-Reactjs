import RestaurantCard from "./ResturantCard";
import {SWIGGY_API_URL} from "../constants";
import {useEffect, useState} from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */

// Filter the restaurant data according input type
filterResturants = (searchInput, resturants) => {
  return (resturants || []).filter((resturant) =>
    resturant?.data?.name.toLowerCase().includes(searchInput.toLowerCase())
  );
};

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getResturants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getResturants() {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const json = await response.json();
      const data = json?.data?.cards[2]?.data?.data?.cards;
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(data);
      setFilterdRestaurants(data);
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchInput, allResturants) => {
    if (searchInput !== "") {
      const data = filterResturants(searchInput, allResturants);
      setFilterdRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilterdRestaurants(allResturants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchInput, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <div className="restaurant-list">
          <Shimmer />
        </div>
      ) : (
        <div className="restaurant-list">
          {filterdRestaurants.map((restaurantList) => {
            return (
              <>
                <RestaurantCard
                  {...restaurantList?.data}
                  key={restaurantList?.data?.id}
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
