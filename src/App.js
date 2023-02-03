import axios from "axios";
import { useState } from "react";
import "./App.css";
import SearchPlace from "./components/SearchPlace";

const kLocAPIurl = "https://us1.locationiq.com/v1/search.php";

const LOCATIONIQ_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [coordinates, setCoordinates] = useState({
    place: "",
    longitude: "",
    latitude: "",
  });

  const searchPlace = (placeName) => {
    const queryParams = {
      params: {
        key: LOCATIONIQ_KEY,
        q: placeName,
        format: "json",
      },
    };
    return axios
      .get(kLocAPIurl, queryParams)
      .then((response) => {
        const newCoordinates = {
          place: placeName,
          longitude: response.data[0].lon,
          latitude: response.data[0].lat,
        };
        setCoordinates(newCoordinates);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div className="App">
      <header>
        <h1>Geocoder</h1>
        <h2>Find coordinates of any place in the world!</h2>
      </header>
      <main>
        <SearchPlace onSubmitChange={searchPlace}></SearchPlace>
        <section>
          <h3>Results for: {coordinates.place}</h3>
          <ul>
            <li>Latitude: {coordinates.latitude}</li>
            <li>Longitude: {coordinates.longitude}</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
