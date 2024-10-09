import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleCountry() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchItem = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/all/singleCountry/&alpha=${id}`
    );
    const responseJson = await response.json();
    setItem(responseJson);
    setLoading(true);
  };
  useEffect(() => {
    fetchItem();
  }, []);
  console.log(item);
  return (
    <div>
      {loading
        ? item.map((item, index) => {
            return (
              <div key={index} className={(p - 5, bg - success)}>
                <h1>{item.population}</h1>;
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default SingleCountry;
