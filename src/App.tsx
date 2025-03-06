import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

const App = () => {
  const [city, setCity] = useState<string>("");

  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=f24febf47d4343d98de155409250603&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
};

export default App;
