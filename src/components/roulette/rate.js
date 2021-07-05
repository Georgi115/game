import "./rate.css";

const Rate = ({ x, color, backgroundColor }) => {
  return (
    <div className="rate">
      <div className="rate__title">
        <p className="rate__titlePrice">10.0$</p>
        <p className="rate__titleCountUsers">10 Игроков</p>
        <p style={{ color: `${color}` }} className="rate__titileX">
          {x}
        </p>
        <button
          style={{ backgroundColor: `${backgroundColor}` }}
          className="rate__titleBtn"
        >
          Ставка 0.00$
        </button>
      </div>
      <div className="rate__user">
        <div className="rate__avatar"></div>
        <p>Игрок</p>
        <p className="rate__userPrice">10.0$</p>
      </div>
      <div className="rate__user">
        <div className="rate__avatar"></div>
        <p>Игрок</p>
        <p className="rate__userPrice">10.0$</p>
      </div>
      <div className="rate__user">
        <div className="rate__avatar"></div>
        <p>Игрок</p>
        <p className="rate__userPrice">10.0$</p>
      </div>
    </div>
  );
};

export default Rate;
