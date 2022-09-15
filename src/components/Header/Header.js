import Navigation from "../Navigation/Navigation";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo"></p>
        <Navigation />
        <div className="header__buttons">
          <button className="header__basket" />
          <button className="header__burger" />
        </div>
      </div>
    </header>
  );
}

export default Header;
