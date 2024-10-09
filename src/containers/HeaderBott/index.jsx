import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./headerB.scss";

function HeaderBott() {
  const [val, setVal] = useState("");
  const navigate = useNavigate();

  const inputVal = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    if (val) {
      navigate(`/name/${val}`);
    } else {
      navigate(`/`);
    }
  }, [val]);
  return (
    <div className="container">
      <div className="header__bottom">
        <form>
          <img
            src="../../../node_modules/bootstrap-icons/icons/search.svg"
            alt="rasm"
          />
          <input
            onChange={inputVal}
            type="search"
            placeholder="Search for a country…"
            value={val}
          />
        </form>
        <div className="selects">
          <select></select>
        </div>
      </div>
    </div>
  );
}

export default HeaderBott;
