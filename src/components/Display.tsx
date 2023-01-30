type WeatherType = {
  feelslike_c: number;
  temp_c: number;
  humidity: number;
  pressure_mb: number;
  condition: string;
};

type DisplayProps = {
  city: string;
  country: string;
  weather: WeatherType;
};
const Display = ({ city, country, weather }: DisplayProps) => {
  return (
    <div className="w-64 h-64 rounded-lg bg-white/20 backdrop-blur-md flex flex-col justify-center items-center z-[30] p-2">
      <div className="text-2xl font-bold text-center">
        {city}, {country}
      </div>
      <div
        className="text-4xl font-bold my-2"
        style={{ textShadow: "2px 2px 5px white" }}>
        {weather?.temp_c}°C
      </div>
      <div>
        <b>Feels Like:</b> {weather?.feelslike_c}°C
      </div>
      <div>
        <b>Pressure:</b> {weather?.pressure_mb}
        <span className="text-xs"> mb</span>
      </div>
      <div>
        <b>Humidity:</b> {weather?.humidity}%
      </div>
      <div className="font-allura text-4xl mt-4">{weather?.condition}</div>
    </div>
  );
};
export default Display;
