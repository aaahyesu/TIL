export default function WeatherBox({ data }) {
  const { city, country, desc, temp } = data;
  return (
    <>
      <h2>
        {country} / {city}
      </h2>
      <p>
        {temp}&deg;C / {desc}
      </p>
    </>
  );
}
