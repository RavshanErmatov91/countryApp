import { useEffect, useState } from "react";
import Country from "../../components/countryCard";

function index() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const result = await response.json();

    setData(result);
    setLoad(true);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="wrapper">
      {load ? (
        data.map((country, index) => (
          <Country
            id={country.area}
            key={index}
            title={country.name.common}
            img={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : (
        <span className="loader"></span>
      )}
    </div>
  );
}

export default index;
