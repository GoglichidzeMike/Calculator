import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import Formula from "./components/Formula";

const endsWithOperator = /[*+-/]$/;

function App() {
  const [formula, setFormula] = useState("");
  const [currentVal, setCurrentVal] = useState("0");
  const [evaluated, setEvaluated] = useState(false);

  const maxDigitWarning = () => {
    //saves the current value parameter, to display the error
    // message and then to display the current value back in 1 second.
    let toDisplayBack = currentVal;
    setCurrentVal("Digit Limit Met");
    console.log(toDisplayBack);
    setTimeout(() => setCurrentVal(toDisplayBack), 1000);
  };

  const addToInput = (val) => {
    if (currentVal !== "Digit Limit Met") {
      const value = val.target.value;
      if (currentVal.length > 21) {
        maxDigitWarning();
      } else if (value === "0" && formula === "") {
        setCurrentVal("0");
      } else {
        if (evaluated) {
          initialize();
          setFormula(value);
          setCurrentVal(value);
        } else {
          setFormula(formula + value);
          setCurrentVal(formula + value);
        }
      }
    }
  };

  const handleEvaluate = () => {
    if (currentVal !== "Digit Limit Met") {
      //setting formula to variable since Slice doesn't change the const value.
      let expression = formula;
      if (formula !== "" && evaluated === false) {
        while (endsWithOperator.test(expression)) {
          expression = expression.slice(0, -1);
        }

        let answer = math.evaluate(expression);
        setCurrentVal(answer);
        setFormula(expression + "=" + answer);
        setEvaluated(true);
      }
    }
  };

  const handleOperators = (val) => {
    const value = val.target.value;
    if (currentVal !== "Digit Limit Met") {
      if (value === "-") {
        if (evaluated) {
          setFormula(currentVal + value);
          setEvaluated(false);
        } else if (formula.endsWith("-")) {
          setFormula(formula);
        } else {
          setFormula(formula + value);
        }
      }

      if (!endsWithOperator.test(formula) && value !== "") {
        if (value === "x") {
          if (evaluated) {
            setFormula(currentVal + value.replace("x", "*"));
            setEvaluated(false);
          } else {
            setFormula(formula + value.replace("x", "*"));
          }
          //handle Multiply Button
        } else if ((value === "+" || value === "/") && !formula.endsWith("-")) {
          //handle + & /
          if (evaluated) {
            setFormula(currentVal + value);
            setEvaluated(false);
          } else {
            setFormula(formula + value);
          }
        } else if (formula.endsWith("-")) {
          if (evaluated) {
            setFormula(currentVal + value);
            setEvaluated(false);
          } else {
            let newInput = formula.slice(0, -1);
            setFormula(newInput + value);
          }
        }
      }
    }
  };

  const initialize = () => {
    setFormula("");
    setCurrentVal("0");
    setEvaluated(false);
  };

  return (
    <div className="App" id="app">
      <div id="calculator" className="calculator">
        <Formula formula={formula} />
        <Screen currentVal={currentVal} />
        <Buttons
          addToInput={addToInput}
          operators={handleOperators}
          evaluate={handleEvaluate}
          initialize={initialize}
        />
      </div>
    </div>
  );
}

export default App;
