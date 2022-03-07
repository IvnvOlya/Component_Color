import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import yes from "../../img/yes.png";
import no from "../../img/no.png";

export default function HeaderStyle() {
  return (
    <div className="HeaderStyle">
      <div className="header">
        <h1 className="heading">Стили оформления</h1>
        <div className="links">
          <Link to="/" className="link_ok">
            <img src={yes} alt="button" />
          </Link>
          <Link to="/" className="link_close">
            <img src={no} alt="button" />
          </Link>
        </div>
      </div>
      <h2 className="description description_top">Здесь вы можете настроить цвета сайта</h2>
    </div>
  );
}
