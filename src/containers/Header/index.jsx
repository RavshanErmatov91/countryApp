import "./header.scss";
function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <h1 className="nav-title">Where in the world?</h1>
          <div className="nav__block">
            <span>
              <img
                src="../../../node_modules/bootstrap-icons/icons/moon.svg"
                alt="rasm"
              />
            </span>
            <p>Dark Mode</p>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
