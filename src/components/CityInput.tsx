type CityProps = {
  citySearch: string;
  setCitySearch: React.Dispatch<React.SetStateAction<string>>;
  suggestedCities: { city: string; country: string }[];
  changeCitySearch: (city: string) => void;
  suggestionsVisible: boolean;
};

const CityInput = ({
  citySearch,
  setCitySearch,
  suggestedCities,
  changeCitySearch,
  suggestionsVisible,
}: CityProps) => {
  return (
    <div className="relative z-[50] mb-6">
      <div className="relative">
        <input
          type="text"
          id="city"
          className="w-60 h-8 px-4 rounded-full shadow-xl flex items-center"
          placeholder="city name"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
        <i className="absolute right-3 top-2 fa-solid fa-search"></i>
      </div>
      {suggestionsVisible && (
        <div className="absolute top-9 w-60 h-max max-h-64 bg-gray-400 flex flex-col rounded-md overflow-auto">
          {suggestedCities.map((cityandcountry, id) => (
            <button
              key={id}
              className="text-start py-2 hover:bg-gray-500 w-full px-4"
              onClick={() => changeCitySearch(cityandcountry.city)}>
              {cityandcountry.city}, {cityandcountry.country}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default CityInput;
