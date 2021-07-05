import "./inventory.css";
import upload from "../../img/upload.png";
import { useSelector, useDispatch } from "react-redux";
import {
  changeInventory,
  changeFilter,
} from "../../toolkitRedux/repositorySlice";

const Inventory = () => {
  const inventory = useSelector((state) => state.repositorySlice.inventory);
  const filter = useSelector((state) => state.repositorySlice.filter);
  const dispatch = useDispatch();
  return (
    <div className="inventory">
      <div className="inventory__filter">
        <p
          onClick={() => dispatch(changeFilter("price"))}
          className={filter === "price" ? "active__filter" : null}
        >
          по цене{" "}
          {filter === "price" ? <i className="fa fa-chevron-down "></i> : null}{" "}
        </p>
        <p
          onClick={() => dispatch(changeFilter("quality"))}
          className={filter === "quality" ? "active__filter" : null}
        >
          по качеству
          {filter === "quality" ? (
            <i className="fa fa-chevron-down "></i>
          ) : null}{" "}
        </p>
      </div>
      <div className="inventory__list">
        <ul className="inventory__listUl">
          {inventory.map((el, idx) => {
            return (
              <li
                onClick={() => dispatch(changeInventory(idx))}
                className={
                  el.active
                    ? "inventory__item inventory__itemActive"
                    : "inventory__item"
                }
                key={idx}
              >
                <img src={el.img} alt="aa"></img>
                <p
                  className="inventory__itemName"
                  style={{ color: `${el.color}` }}
                >
                  {el.name}
                </p>
                <p className="inventory__itemPrice">{el.price}</p>
                <div
                  style={{
                    background: `linear-gradient(50deg,  ${el.color} 50%, #1b1f3500 50%)`,
                  }}
                  className="inventory__figure"
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="inventory__btn">
        <button className="inventory__btnOne">
          <i className="fa fa-random"></i> Обменять
        </button>
        <button className="inventory__btnTwo">
          <img src={upload} alt="upload"></img> Получить{" "}
        </button>
      </div>
    </div>
  );
};
export default Inventory;
