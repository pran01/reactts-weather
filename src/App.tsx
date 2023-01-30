import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";
import CityInput from "./components/CityInput";

type WeatherType = {
  feelslike_c: number;
  temp_c: number;
  humidity: number;
  pressure_mb: number;
  condition: string;
};

function App() {
  const [citySearch, setCitySearch] = useState("");
  const [countrySearch, setCountrySearch] = useState("");

  const [weather, setWeather] = useState<WeatherType>({
    feelslike_c: 0,
    temp_c: 0,
    humidity: 0,
    pressure_mb: 0,
    condition: "",
  });
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [suggestedCities, setSuggestedCities] = useState<
    { city: string; country: string }[]
  >([]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [cityWeather, setCityWeather] = useState("");
  let apiKey = "49f4aaed0988469cae764440233001";
  let api = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityWeather}`;
  let searchApi = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${citySearch}`;

  useEffect(() => {
    const apiCall = async () => {
      try {
        if (cityWeather !== "") {
          const res = await axios.get(api).then((res) => res);
          console.log(res.data);
          setWeather({
            feelslike_c: res.data.current.feelslike_c as number,
            temp_c: res.data.current.temp_c as number,
            humidity: res.data.current.humidity as number,
            pressure_mb: res.data.current.pressure_mb as number,
            condition: res.data.current.condition.text as string,
          });
          setCity(res.data.location.name);
          setCountry(res.data.location.country);
        }
      } catch (error) {
        console.error(error);
      }
    };
    apiCall();
  }, [cityWeather, api]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        if (citySearch !== "") {
          const res2 = await axios.get(searchApi).then((res) => res);
          console.log(res2.data);
          // setWeather(res.data.main);
          let suggestion: { city: string; country: string }[] = [];
          res2.data.forEach((location: any) =>
            suggestion.push({ city: location.name, country: location.country })
          );
          setSuggestedCities(suggestion);
          setSuggestionsVisible(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    apiCall();
  }, [citySearch, searchApi]);

  const changeCitySearch = (city: string) => {
    setSuggestedCities([]);
    setSuggestionsVisible(false);
    setCityWeather(city);
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center flex-col bg-[url('./assets/images/mist.jpg')] shadow-xl bg-center bg-cover bg-no-repeat
    font-titillium-web
    ">
      <CityInput
        citySearch={citySearch}
        setCitySearch={setCitySearch}
        suggestedCities={suggestedCities}
        changeCitySearch={changeCitySearch}
        suggestionsVisible={suggestionsVisible}
      />
      {cityWeather !== "" && (
        <Display city={city} country={country} weather={weather} />
      )}
    </div>
  );
}

export default App;
