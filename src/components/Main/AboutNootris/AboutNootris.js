import lemonImage from "../../../images/nootris-group.png";
function AboutNootris() {
  return (
    <section className="about-nootris">
      <div className="about-nootris__container">
        <div className="about-nootris__wrapper">
          <h1 className="about-nootris__title">Активируй иммунитет!</h1>
          <p className="about-nootris__description">
            Всего пять секунд в день помогут укрепить иммунитет и повысить
            защитные силы организма
          </p>
          <span>NOOTRIS ПОМОГАЕТ</span>
          <p className="about-nootris__description-help">
            Вашему организму во время пандемии и сезонных простуд
          </p>
        </div>
        <img
          src={lemonImage}
          alt="nootris and lemon"
          className="about-nootris__image"
        />
      </div>
    </section>
  );
}

export default AboutNootris;
