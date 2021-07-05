import { useDispatch, useSelector } from "react-redux";
import {
  changeInputField,
  sendMessage,
  changeCount,
} from "../../toolkitRedux/chatSlice";
import { useEffect } from "react";
import "./textField.css";
const TextField = () => {
  const inputField = useSelector((state) => state.chatSlice.inputField);
  const count = useSelector((state) => state.chatSlice.count);
  const dispatch = useDispatch();
  useEffect(() => {
    if (count === 0) return;
    const interval = setInterval(() => {
      dispatch(changeCount());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="textField">
      <input
        onChange={(e) => dispatch(changeInputField(e.target.value))}
        value={inputField}
        placeholder="Написать сообщение"
        className="textField__input"
      ></input>
      <div className="textField__text">
        <p>Перезараядка: {count} ceк</p>
        <button
          onClick={() => dispatch(sendMessage())}
          className={
            count > 0 ? "textField__btn textField__btn2" : "textField__btn"
          }
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default TextField;
