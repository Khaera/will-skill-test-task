/* eslint-disable jsx-a11y/anchor-is-valid */
function BurgerMenu({ isOpen, toggleBurger }) {
  return (
    <div className={`burger ${isOpen ? "burger_opened" : "burger_hidden"}`}>
      <button
        className="burger__close-button"
        type="button"
        onClick={toggleBurger}
      />
      <div className="burger__container">
        <a href="#" className="navigation-link burger-link">
          FAQ
        </a>
        <a href="#" className="navigation-link burger-link">
          Оплата и доставка
        </a>
        <a href="#" className="navigation-link burger-link">
          Возврат
        </a>
        <a href="#" className="navigation-link burger-link">
          Исследования
        </a>
        <a href="#" className="navigation-link burger-link">
          Личный кабинет
        </a>
        <a href="tel:8800600-09-90" className="navigation-link burger-link">
          8 8 (800) 600-09-90
        </a>
      </div>
    </div>
  );
}

export default BurgerMenu;
