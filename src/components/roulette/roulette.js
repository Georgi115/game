import "./roulette.css";
import plaska from "../../img/plaska.png";
import poloska from "../../img/poloska.png";
import Coin from "./coin";
import { changeRoulette } from "../../toolkitRedux/rouletteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RouletteInfo from "./rouletteInfo";
import Rate from "./rate";

const Roulette = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.rouletteSlice.coins);
  const clickRoulete = useSelector((state) => state.rouletteSlice.clickRoulete);
  useEffect(() => {}, [clickRoulete]);
  function mixarr(arr) {
    return arr
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  }
  return (
    <div className="roulette">
      <div
        onClick={() => {
          dispatch(changeRoulette());
        }}
        style={{ backgroundImage: `url(${plaska})` }}
        className="roulette__plaska"
      >
        <img src={poloska} alt="poloska"></img>
        <Coin arr={mixarr(coins)} />
      </div>
      <RouletteInfo />
      <div
        style={{
          paddingLeft: "108px",
          paddingRight: "108px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Rate x="X2" color="#328ac6" backgroundColor=" #328ac6" />
        <Rate x="X14" color="#ec9d13" backgroundColor=" #ec9d13" />
        <Rate x="X2" color="#af4040" backgroundColor="#af4040" />
      </div>
    </div>
  );
};

export default Roulette;
