import "./message.css";
import TextField from "./textField";
import { useSelector } from "react-redux";
const Message = () => {
  const messages = useSelector((state) => state.chatSlice.messages);

  return (
    <div className="message">
      <div className="message__block">
        {messages.map((el, id) => {
          return (
            <div key={id} className="message__user">
              <div className="message__userAvatar"></div>
              <div className="message__info">
                <div className="message__title">
                  <p>{el.name}</p>
                  <p>{el.time}</p>
                </div>
                <div className="message__text">
                  <p>{el.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <TextField></TextField>
    </div>
  );
};

export default Message;
