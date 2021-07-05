import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeWinnerCoin,
  changeBackRoulete,
} from "../../toolkitRedux/rouletteSlice";
import "./coin.css";

const Coin = ({ arr }) => {
  const dispatch = useDispatch();

  const clickRoulete = useSelector((state) => state.rouletteSlice.clickRoulete);
  useEffect(() => {
    if (clickRoulete) return;
    dispatch(changeWinnerCoin(arr[5]));
  }, [clickRoulete]);
  setTimeout(() => dispatch(changeBackRoulete()), 300);
  return (
    <div
      className={
        clickRoulete
          ? "coin animated  bounceOutRight "
          : "coin  animated bounceInLeft "
      }
    >
      {arr.map((el, id) => {
        return <img src={el.img} key={id} alt="coin"></img>;
      })}
    </div>
  );
};

export default Coin;
