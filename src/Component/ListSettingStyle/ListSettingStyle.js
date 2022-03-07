import arrow from "../../img/arrow.png";
import "./ListSettingStyle.css";
import { Link } from "react-router-dom";

export default function ListDesignStyle(props) {
  console.log(props)

  return (
    <li className="list_item">
      <Link to={props.config.link} className="list_item_link list_item_style">
        <div className="list_item_block">
          <img src={props.config.icon} alt="color1" />
          <div className="list_item_text">
            <h2 className="list_item_heading">{props.config.title}</h2>
            <p className="list_item_description">{props.config.subtitle}</p>
          </div>
        </div>
        <div className="list_img">
          <img src={arrow} alt="" />
        </div>
      </Link>
    </li>
  );
}
