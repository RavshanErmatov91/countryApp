import { NavLink } from "react-router-dom";
import "./country.scss";
function Country({ title, img, capital, region, population, id }) {
  return (
    <div className="intro shadow-lg rounded">
      <img
        style={{ width: "264px", height: "160px" }}
        src={img}
        alt="rasm"
        className="rounded-top"
      />
      <div className="intro__block">
        <NavLink to={`/singleCountry/${id}`}>
          <h5 className="intro__block-title">{title}</h5>
        </NavLink>
        <p className="intro__block-description">
          <strong>Population: </strong>
          {population}
        </p>
        <p className="intro__block-description">
          <strong>Region: </strong>
          {region}
        </p>
        <p className="intro__block-description">
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default Country;
