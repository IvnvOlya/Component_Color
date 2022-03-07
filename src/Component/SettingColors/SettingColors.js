import icon from "../../img/Group3.png";
import yes from "../../img/yes.png";
import no from "../../img/no.png";
import "./SettingColors.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function SettingColors(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const saveColor = (color) => {
    props.config.rowsColor[activeIndex].color = color;
    setActiveIndex(null);
  };

  return (
    <div className="Main">
      <Modal
        activeIndex={activeIndex}
        initialColor={props.config.rowsColor[activeIndex]?.color}
        saveColor={saveColor}
      />
      <div className="SettingColors">
        <div className="header">
          <div className="title">
            <Link
              to="/style"
              className="heading heading_link heading_bottom"
              alt="меню цвета"
            >
              {props.config.innerTitle}
            </Link>
          </div>
          <div className="buttons">
            <Link to="/style" className="link_ok">
              <img src={yes} alt="" />
            </Link>
            <Link to="/style" className="link_close">
              <img src={no} alt="" />
            </Link>
          </div>
        </div>

        <div>
          <ul className="list">
            {props.config.rowsColor.map((item, index) => (
              <li className="list_item" key={index}>
                <Link
                  to="/style/menu"
                  className="list_item_link ColorsMenu_list"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="list_item_block">
                    <div
                      className="list_color"
                      style={{ background: item.color }}
                    ></div>
                    <div className="list_item_text">
                      <h2 className="list_item_heading">{item.title}</h2>
                      <p className="list_item_description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="img_icon">
                    <img src={icon} alt="" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
