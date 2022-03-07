import "./SettingStyle.css";
import HeaderStyle from "../HeaderStyle/HeaderStyle";
import ListSettingStyle from "../ListSettingStyle/ListSettingStyle";

export default function DesignStyle(props) {
  return (
    <div className="Main">
      <div id="SettingStyle">
        <HeaderStyle />
        <h3 className="subtitle">Основные цвета</h3>
        <ul className="list">
          <ListSettingStyle config={props.config.menu} />
          <ListSettingStyle config={props.config.base} />
        </ul>
        <div className="line"></div>
        <h3 className="subtitle padding_title">Дополнительные цвета</h3>
        <ul className="list">
          <ListSettingStyle config={props.config.notific} />
        </ul>
      </div>
    </div>
  );
}
