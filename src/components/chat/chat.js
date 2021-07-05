import "./chat.css";
import Message from "./message";
import Info from "./info";

const Chat = () => {
  return (
    <aside className="chat">
      <div className="chat__title">
        <p className="chat__titleText">Чат</p>
        <p className="chat__titleOnline">
          Онлайн: <span>423</span>
        </p>
        <div class="chat__arrow">
          <i className="fa fa-reply"></i>
        </div>
      </div>
      <Message></Message>
      <Info></Info>
    </aside>
  );
};

export default Chat;
