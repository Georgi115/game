import "./rouletteInfo.css";
import coinBlue from "../../img/coin/coinBlue.png";
import coinRed from "../../img/coin/coinRed.png";
import coinYellow from "../../img/coin/coinYellow.png";
import { useSelector } from "react-redux";

const RouletteInfo = () => {
  const winnerCoin = useSelector((state) => state.rouletteSlice.winnerCoin);
  const counterCoin = (arr, coin) => {
    switch (coin) {
      case "blue":
        let countBlue = 0;
        arr.forEach((el) => {
          if (el.id === 2) {
            countBlue += 1;
          }
        });
        return countBlue;

      case "red":
        let countRed = 0;
        arr.forEach((el) => {
          if (el.id === 1) {
            countRed += 1;
          }
        });
        return countRed;

      case "yellow":
        let countYellow = 0;
        arr.forEach((el) => {
          if (el.id === 0) {
            countYellow += 1;
          }
        });
        return countYellow;

      default:
        break;
    }
  };

  return (
    <div className="rouletteInfo">
      <div className="rouletteInfo__count">
        <img src={coinBlue} alt="coin"></img>{" "}
        <span>{counterCoin(winnerCoin, "blue")}</span>
        <img src={coinRed} alt="coin"></img>{" "}
        <span>{counterCoin(winnerCoin, "red")}</span>
        <img src={coinYellow} alt="coin"></img>{" "}
        <span>{counterCoin(winnerCoin, "yellow")}</span>
      </div>
      <div className="rouletteInfo__textInfo">
        <p>
          Общий банк <span>100$</span>
        </p>
        <p>
          Участников <span>20</span>
        </p>
        <p>
          Скинов <span>50</span>
        </p>
      </div>
      <div className="rouletteInfo__lastCoins">
        {winnerCoin.map((el, id) => {
          if (id >= 9) return null;
          return <img key={id} src={el.img} alt="coin"></img>;
        })}
      </div>
    </div>
  );
};

export default RouletteInfo;
