import ginger from "../../../images/ginger.png";
import nootris from "../../../images/nootris.png";
import virus from "../../../images/virus.png";

function BuyNootris() {
  return (
    <section className="buy-nootris">
      <div className="buy-nootris__container">
        <p className="buy-nootris__title">
          Получи защиту иммунитета
          <span>со скидкой -15% первым!</span>
        </p>
        <div className="buy-nootris__price">
          <p className="buy-nootris__price-old">750₽</p>
          <span>690₽</span>
        </div>
        <ul className="buy-nootris__items">
          <li className="buy-nootris__item">
            <img
              src={ginger}
              alt="Ginger"
              className="buy-nootris__item-image"
            ></img>
            <p className="buy-nootris__item-heading">
              Содержит
              <span>имбирь</span>
            </p>
          </li>
          <li className="buy-nootris__item">
            <img
              src={nootris}
              alt="Nootris"
              className="buy-nootris__item-image"
            ></img>
            <p className="buy-nootris__item-heading">
              + Бесплатная доставка
              <span>Специальная цена</span>
            </p>
          </li>
          <li className="buy-nootris__item">
            <img
              src={virus}
              alt="Virus"
              className="buy-nootris__item-image"
            ></img>
            <p className="buy-nootris__item-heading">
              Нейтрализует
              <span>вирусы</span>
            </p>
          </li>
        </ul>
        <button className="buy-nootris__submit-button">Оформить заказ!</button>
      </div>
    </section>
  );
}

export default BuyNootris;
