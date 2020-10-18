import React from "react";

const operatorStyle = { background: "#666666" },
  clearStyle = { background: "#ac3939" },
  equalsStyle = {
    background: "#004466",
    position: "absolute",
    height: 130,
    bottom: 5,
  };

const Button = ({
  initialize,
  operators,
  evaluate,
  addToInput,
  // decimal
}) => {
  return (
    <div>
      <button
        className="jumbo"
        id="clear"
        onClick={initialize}
        style={clearStyle}
        value="AC"
      >
        AC
      </button>
      <button id="divide" onClick={operators} style={operatorStyle} value="/">
        /
      </button>
      <button id="multiply" onClick={operators} style={operatorStyle} value="x">
        x
      </button>
      <button id="seven" onClick={addToInput} value="7">
        7
      </button>
      <button id="eight" onClick={addToInput} value="8">
        8
      </button>
      <button id="nine" onClick={addToInput} value="9">
        9
      </button>
      <button id="subtract" onClick={operators} style={operatorStyle} value="-">
        -
      </button>
      <button id="four" onClick={addToInput} value="4">
        4
      </button>
      <button id="five" onClick={addToInput} value="5">
        5
      </button>
      <button id="six" onClick={addToInput} value="6">
        6
      </button>
      <button
        id="add"
        onClick={operators}
        style={operatorStyle}
        className="operators"
        value="+"
      >
        +
      </button>
      <button id="one" onClick={addToInput} value="1">
        1
      </button>
      <button id="two" onClick={addToInput} value="2">
        2
      </button>
      <button id="three" onClick={addToInput} value="3">
        3
      </button>
      <button className="jumbo" id="zero" onClick={addToInput} value="0">
        0
      </button>
      <button id="decimal" onClick={addToInput} value=".">
        .
      </button>
      <button id="equals" onClick={evaluate} style={equalsStyle} value="=">
        =
      </button>
    </div>
  );
};

export default Button;
