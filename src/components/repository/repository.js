import "./repository.css";
import Inventory from "./inventory";
import { useSelector } from "react-redux";

const Repository = () => {
  const choicePrice = useSelector((state) => state.repositorySlice.choicePrice);

  return (
    <div className="repository">
      <div className="repository__info">
        <p className="repository__title">хранилище</p>
        <div className="repository__information">
          <p className="repository__balance">
            На балансе: <span>$124.42</span>{" "}
          </p>
          <p className="repository__choice">
            Выбрано: <span>${choicePrice}</span>
          </p>
          <p className="repository__everything">Все</p>
        </div>
      </div>
      <Inventory />
    </div>
  );
};

export default Repository;
