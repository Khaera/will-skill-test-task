import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

import burgerButton from "../../images/burger-button.svg";

function Header({ isOpen, toggleBurger }) {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo"></p>
        <Navigation />
        <BurgerMenu isOpen={isOpen} toggleBurger={toggleBurger} />
        <div className="header__buttons">
          <button className="header__basket" />
          <img
            alt="кнопка бургерного меню"
            src={burgerButton}
            className="header__burger-button"
            onClick={toggleBurger}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
