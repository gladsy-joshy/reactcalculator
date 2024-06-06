import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [time, setTime] = useState("");

  const showTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const timeString = "" + hours + ":" + minutes + "";
    setTime(timeString);
    setTimeout(showTime, 1000);
  };

  const handleAC = () => {
    setInput("");
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEqualTo = () => {
    const result = eval(input);
    setInput(result);
  };
  const handledel = () => {
    setInput((prevInput) => {
      const d = [...prevInput];
      d.pop();
      return d;
    });
  };

  useEffect(() => {
    showTime();
    console.log("hello");
  }, []);

  useLayoutEffect(() => {
    console.log("hi");
  }, []);

  return (
    <div className="Main">
      <div className="Container">
        <div className="containerzero">{time}</div>
        <div className="ConatainerOne">{input}</div>

        <div className="ConatainerTwo">
          <div className="Column">
            <div className="BoxWhite" onClick={() => handleAC("AC")}>
              <div className="Innerboxone">AC</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("7")}>
              <div className="Innerbox">7</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("4")}>
              <div className="Innerbox">4</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("1")}>
              <div className="Innerbox">1</div>
            </div>
          </div>

          <div className="Column">
            <div className="BoxWhite" onClick={() => handledel("del")}>
              <div className="Innerboxone">del</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("8")}>
              <div className="Innerbox">8</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("5")}>
              <div className="Innerbox">5</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("2")}>
              <div className="Innerbox">2</div>
            </div>
          </div>

          <div className="Column">
            <div className="BoxWhite" onClick={() => handleButtonClick("%")}>
              <div className="Innerboxone">%</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("9")}>
              <div className="Innerbox">9</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("6")}>
              <div className="Innerbox">6</div>
            </div>
            <div className="BoxBlack" onClick={() => handleButtonClick("3")}>
              <div className="Innerbox">3</div>
            </div>
          </div>

          <div className="Column">
            <div className="BoxOrange" onClick={() => handleButtonClick("/")}>
              <div className="Innerboxlastone">/</div>
            </div>
            <div className="BoxOrange" onClick={() => handleButtonClick("*")}>
              <div className="Innerbox">*</div>
            </div>
            <div className="BoxOrange" onClick={() => handleButtonClick("-")}>
              <div className="Innerbox">-</div>
            </div>
            <div className="BoxOrange" onClick={() => handleButtonClick("+")}>
              <div className="Innerbox">+</div>
            </div>
          </div>
        </div>

        <div className="ConatainerThree">
          <div className="row">
            <div className="Lastrowzero" onClick={() => handleButtonClick("0")}>
              <div className="lastboxzero">0</div>
            </div>
            <div className="Lastrowdot" onClick={() => handleButtonClick(".")}>
              <div className="lastboxOnedot">.</div>
            </div>
            <div className="Lastrowequalto" onClick={() => handleEqualTo()}>
              <div className="lastboxOneequalto">=</div>
            </div>
          </div>
        </div>
        <div className="ConatainerFour">________________</div>
      </div>
    </div>
  );
};

export default Calculator;
