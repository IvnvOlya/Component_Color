import React, { useState } from "react";
import "./Modal.css";
import Modal from "react-modal";
import yes from "../../img/yes.png";
import no from "../../img/no.png";
import { ChromePicker } from "react-color";

function ModalInFunctionalComponent(props) {
  const [color, setColor] = useState(props.initialColor);

  return (
    <>
      <Modal
        className="Modal"
        isOpen={props.activeIndex !== null}
        ariaHideApp={false}
      >
        <div className="Picker">
          <div className="title_block">
            <p>Выбрать цвет</p>
            <div className="picker_btn">
              <button className="picker_ok" onClick={()=>props.saveColor(color)}>
                <img src={yes} alt="" />
              </button>
              <button className="picker_close" onClick={()=>props.saveColor(props.initialColor)}>
                <img src={no} alt="" />
              </button>
            </div>
          </div>
          <ChromePicker
            color={color}
            onChange={(color) => {
              setColor(color.hex);
            }}
          />
        </div>
      </Modal>
    </>
  );
}
export default ModalInFunctionalComponent;
