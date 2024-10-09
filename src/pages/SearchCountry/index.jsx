import "./searchCountry.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Country from "../../components/countryCard";

function SearchCountry() {
  const [country, setCountry] = useState([]);
  const [load, setLoad] = useState(false);
  const { id } = useParams();

  const fetchCountry = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    const resJson = await res.json();
    setCountry(resJson);
    setLoad(true);

    if (res.status === 404) {
      return <h1>{res.message}</h1>;
    }
  };

  console.log(country);

  useEffect(() => {
    fetchCountry();
  }, [id]);

  return (
    <div>
      {load ? (
        <div className="wrapper">
          {country.length > 0 ? (
            country.map((el, index) => {
              return (
                <Country
                  key={index}
                  img={el.flags.png}
                  capital={el.capital}
                  population={el.population}
                  region={el.region}
                  title={el.name.common}
                />
              );
            })
          ) : (
            <h1 className="text-center">{country.message}</h1>
          )}
        </div>
      ) : (
        <h1>
          <span className="loader"></span>
        </h1>
      )}
    </div>
  );
}

export default SearchCountry;
