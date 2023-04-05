import { useState } from "react";
import './Styles/App.css';

function App() {
  const [theme, setTheme] = useState(1);



  const changeTheme = () => {
    // =====================================
      let modeToggler = document.querySelector(".toggle");
      let toggleTheme = document.querySelector(".toggle > span");
      let bgBody = document.body;
      let allP = document.querySelectorAll("p");
      let btns = document.querySelectorAll("button");
      let calculator = document.querySelector(".container");
      let screen = document.querySelector("input");
      let del = document.querySelector(".del");
      let reset = document.querySelector(".reset");
      let equal = document.querySelector(".equal");
      let nums = document.querySelectorAll(".nums .spans span");
  // =====================================
    setTheme(theme + 1);
    if (theme >= 2) {
      setTheme(0);
    }
    if (theme === 0) {
      modeToggler.style.textAlign = "left";
      modeToggler.style.backgroundColor = "var(--toggle1)";
      bgBody.style.backgroundColor = "var(--back1)";
      toggleTheme.style.backgroundColor = "var(--red)";
      allP.forEach(p => p.style.color = "var(--white)");
      calculator.style.backgroundColor = "var(--toggle1)";
      screen.style.backgroundColor = "var(--screen1)";
      screen.style.color = "var(--white)"
      btns.forEach(btn => btn.style.color = "var(--ckey1)");
      btns.forEach(btn => btn.style.backgroundColor = "var(--keybg1)");
      del.style.backgroundColor = "var(--key1)";
      del.style.color = "var(--white)";
      reset.style.backgroundColor = "var(--key1)";
      reset.style.color = "var(--white)";
      equal.style.backgroundColor = "var(--red)";
      equal.style.color = "var(--white)";
      nums.forEach(num => num.style.color = "var(--white)");
    } else if (theme === 1) {
      modeToggler.style.textAlign = "center";
      bgBody.style.backgroundColor = "var(--back2)";
      modeToggler.style.backgroundColor = "var(--toggle2)";
      bgBody.style.backgroundColor = "var(--back2)";
      toggleTheme.style.backgroundColor = "var(--red)";
      allP.forEach(p => p.style.color = "var(--screencolor2)");
      calculator.style.backgroundColor = "var(--toggle2)";
      screen.style.backgroundColor = "var(--screen2)";
      screen.style.color = "var(--screencolor2)";
      btns.forEach(btn => btn.style.color = "var(--ckey1)");
      btns.forEach(btn => btn.style.backgroundColor = "var(--keybg2)");
      del.style.backgroundColor = "var(--key2)";
      del.style.color = "var(--white)";
      reset.style.backgroundColor = "var(--key2)";
      reset.style.color = "var(--white)";
      equal.style.backgroundColor = "var(--red)";
      equal.style.color = "var(--white)";
      nums.forEach(num => num.style.color = "var(--screencolor2)");
    } else if (theme === 2) {
      modeToggler.style.textAlign = "right";
      bgBody.style.backgroundColor = "var(--back3)";
      modeToggler.style.backgroundColor = "var(--toggle3)";
      bgBody.style.backgroundColor = "var(--back3)";
      toggleTheme.style.backgroundColor = "var(--key3)";
      allP.forEach(p => p.style.color = "var(--screencolor3)");
      calculator.style.backgroundColor = "var(--toggle3)";
      screen.style.backgroundColor = "var(--screen3)";
      screen.style.color = "var(--screencolor3)";
      btns.forEach(btn => btn.style.color = "var(--screencolor3)");
      btns.forEach(btn => btn.style.backgroundColor = "var(--keybg3)");
      del.style.backgroundColor = "var(--del)";
      del.style.color = "var(--white)";
      reset.style.backgroundColor = "var(--del)";
      reset.style.color = "var(--white)";
      equal.style.backgroundColor = "var(--key3)";
      equal.style.color = "var(--white)";
      nums.forEach(num => num.style.color = "var(--screencolor3)");
    }
  };
  const [input, setInput] = useState("");
  const click = (e) => {
    setInput(input + `${e.target.value}`)
  };
  return (
    <main>
      <div className="calc-theme">
        <div className="calc">
          <p>calc</p>
        </div>
        <div className="theme">
          <p>theme</p>
          <div className="nums">
            <div className="spans">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            </div>
            <div onClick={changeTheme} className="toggle">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    <input type="text" value={input} readOnly />
    <div className="container">
        <div className="num-btn">
            <button onClick={click} value="7">7</button>
            <button onClick={click} value="8">8</button>
            <button onClick={click} value="9">9</button>
            <button className="del" onClick={() => {setInput(input.slice(0, -1))}}>DEL</button>
            <button onClick={click} value="4">4</button>
            <button onClick={click} value="5">5</button>
            <button onClick={click} value="6">6</button>
            <button onClick={click} value="+">+</button>
            <button onClick={click} value="1">1</button>
            <button onClick={click} value="2">2</button>
            <button onClick={click} value="3">3</button>
            <button onClick={click} value="-">-</button>
            <button onClick={click} value=".">.</button>
            <button onClick={click} value="0">0</button>
            <button onClick={click} value="/">/</button>
            <button onClick={click} value="*">x</button>
        </div>

          <div className="reset-equal">
            <button className="reset" onClick={() => setInput("")}>reset</button>
            <button disabled={input === ""} className="equal" onClick={() => setInput((eval(input)).toString())}>=</button>
          </div>

    </div>
    </main>
  );
}

export default App;
