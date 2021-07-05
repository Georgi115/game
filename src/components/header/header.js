import logo from "../../img/logoCopy.svg";
import mainLogo from "../../img/mainLogo.svg";
import avatar from "../../img/avatar.jpg";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logoCopy" src={logo} alt="logoCopy"></img>
        <img className="mainLogo" src={mainLogo} alt="mainLogo"></img>
      </div>
      <div className="header__menu">
        <ul className="header__list">
          <li className="header__itemMenu">
            {" "}
            <i className="fa fa-home"></i>Главная страница
          </li>
          <li className="header__itemMenu">
            <i className="fa fa-recycle"></i> История выводов
          </li>
          <li className="header__itemMenu">
            <i className="fa fa-headphones"></i> Поддержка
          </li>
        </ul>
        <ul className="header__socialList">
          <li className="header__socialItem">
            <i className="fa fa-twitter"></i>
          </li>
          <li className="header__socialItem">
            <i className="fa fa-vk"></i>
          </li>
          <li className="header__socialItem">
            <i className="fa fa-odnoklassniki"></i>
          </li>
        </ul>
      </div>
      <div className="header__user">
        <img className="header__avatar" src={avatar} alt="avatar"></img>
        <p className="header__text">514$</p>
        <button className="header__btn">+Пополнить</button>
      </div>
      <div className="header__exit">
        <i className="fa fa-clone"></i>
      </div>
    </header>
  );
};

export default Header;
