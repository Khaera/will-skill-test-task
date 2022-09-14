/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  return (
    <header className="header">
      <p className="header__logo"></p>
      <nav className="header__navigation">
        <a href="#" className="header__nav-link">
          FAQ
        </a>
        <a href="#" className="header__nav-link">
          Оплата и доставка
        </a>
        <a href="#" className="header__nav-link">
          Возврат
        </a>
        <a href="#" className="header__nav-link">
          Исследования
        </a>
        <a href="#" className="header__nav-link">
          Личный кабинет
        </a>
        <a href="tel:8800600-09-90" className="header__nav-link">
          8 8 (800) 600-09-90
        </a>
      </nav>
      <button className="header__basket"></button>
    </header>
  );
}

export default Header;
