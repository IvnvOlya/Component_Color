import "./App.css";
import Main from "../Main/Main";
import SettingStyle from "../SettingStyle/SettingStyle";
import ListSettingStyle from "../ListSettingStyle/ListSettingStyle";
import SettingColors from "../SettingColors/SettingColors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const config = {
    menu: {
      title: "Оформление меню",
      subtitle: "Настройте цвета меню",
      icon: require("../../img/Color1.png"),
      link: "/style/menu",
      innerTitle: "Цвета меню",
      rowsColor: [
        {
          color: "#2B3D4F",
          title: "Фон меню",
          description: "Цвет заливки основного фона",
        },
        {
          color: "#FFFFFF",
          title: "Текст раздела",
          description: "Цвет текста разделов главного меню ",
        },
        {
          color: "#5286CA",
          title: "Маркер",
          description: "Цвет выбранного раздела меню",
        },
        {
          color: "#9CB2C9",
          title: "Иконка раздела",
          description: "Цвет иконки в главном меню ",
        },
      ],
    },
    base: {
      title: "Базовые элементы",
      subtitle: "Цвета крупных элементов интерфейса",
      icon: require("../../img/Color2.png"),
      link: "/style/base",
      innerTitle: "Базовые элементы",
      rowsColor: [
        {
          color: "#333333",
          title: "Заголовок и текст",
          description: "Отличит заголовки от текста",
        },
        {
          color: "#8A91A7",
          title: "Метки",
          description: "Подписи полей ввода и таблиц",
        },
        {
          color: "#587AB0",
          title: "Иконки",
          description: "Цвета иконок",
        },
        {
          color: "#FFFFFF",
          title: "Рабочая область",
          description: "Фон базовых элементов",
        },
      ],
    },
    notific: {
      title: "Уведомление",
      subtitle: "Цвета всплывающих подсказок",
      icon: require("../../img/Color3.png"),
      link: "/style/notific",
      innerTitle: "Цвета уведомлений",
      rowsColor: [
        {
          color: "#449637",
          title: "Успех",
          description: "При положительном результате",
        },
        {
          color: "#C15652",
          title: "Опасность",
          description: "Ограничит возможности",
        },
        {
          color: "#F6C75A",
          title: "Предупреждение",
          description: "Для предупредительных сообщений",
        },
        {
          color: "#5659CE",
          title: "Информационный",
          description: "Донесет материал",
        },
      ],
    },
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/style" element={<SettingStyle config={config} />}/>
          <Route path="/style" element={<ListSettingStyle/>}/>
          <Route path="/style/menu" element={<SettingColors config={config.menu} />}/>
          <Route path="/style/base" element={<SettingColors config={config.base} />}/>
          <Route path="/style/notific" element={<SettingColors config={config.notific} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
