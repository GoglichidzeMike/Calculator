import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import Formula from "./components/Formula";
import Particles from "react-particles-js";

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

        if (formula === "-") {
          return;
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
          setCurrentVal(value);
          setEvaluated(false);
        } else if (formula.endsWith("-")) {
          setFormula(formula);
        } else {
          setFormula(formula + value);
          setCurrentVal(value);
        }
      }

      if (!endsWithOperator.test(formula) && formula !== "") {
        if (value === "x") {
          if (evaluated) {
            setFormula(currentVal + value.replace("x", "*"));
            setEvaluated(false);
          } else {
            setFormula(formula + value.replace("x", "*"));
            setCurrentVal(value);
          }
          //handle Multiply Button
        } else if ((value === "+" || value === "/") && !formula.endsWith("-")) {
          //handle + & /
          if (evaluated) {
            setFormula(currentVal + value);
            setCurrentVal(value);
            setEvaluated(false);
          } else {
            setFormula(formula + value);
            setCurrentVal(value);
          }
        } else if (formula.endsWith("-")) {
          if (evaluated) {
            setFormula(currentVal + value);
            setCurrentVal(value);
            setEvaluated(false);
          } else {
            let newInput = formula.slice(0, -1);
            setFormula(newInput + value);
            setCurrentVal(value);
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
    <>
      <div className="App" id="app">
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
              move: {
                speed: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
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
        <p className="footer">
          dev by -{" "}
          <a target="blank" href="https://fb.me/mi5ke">
            Mikael G
          </a>
        </p>
        <p className="footer" id="bot">
          <a
            target="blank"
            href="https://github.com/GoglichidzeMike/Calculator"
          >
            this project on Git
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
