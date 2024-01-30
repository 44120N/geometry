let resultPythagoras = document.getElementById("pythagoras");
let aborc;

function callPythagoras() {
  let a = parseFloat(document.getElementById("aPy").value);
  a = parseFloat(a.toFixed(floatAccuration));
  let b = parseFloat(document.getElementById("bPy").value);
  b = parseFloat(a.toFixed(floatAccuration));
  let c = parseFloat(document.getElementById("cPy").value);
  c = parseFloat(a.toFixed(floatAccuration));

  resultPythagoras.innerHTML = "";

  if (
    a <= 0 ||
    b <= 0 ||
    c <= 0 ||
    a > maxValue ||
    b > maxValue ||
    c > maxValue
  ) {
    resultPythagoras.classList.remove("form__equation");
    let result = [];
    if (a <= 0) {
      console.log(result);
      resultPythagoras.classList.add("red");
      result.push("Side a should be positive number");
    }
    if (a > maxValue) {
      resultPythagoras.classList.add("red");
      result.push("Side a: Number limit exceeded");
    }
    if (b <= 0) {
      console.log(result);
      resultPythagoras.classList.add("red");
      result.push("Side b should be positive number");
    }
    if (b > maxValue) {
      resultPythagoras.classList.add("red");
      result.push("Side b: Number limit exceeded");
    }
    if (c <= 0) {
      console.log(result);
      resultPythagoras.classList.add("red");
      result.push("Side c should be positive number");
    }
    if (c > maxValue) {
      resultPythagoras.classList.add("red");
      result.push("Side c: Number limit exceeded");
    }
    resultPythagoras.innerHTML = result.join("<br>");
  } else {
    //True/False?
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      resultPythagoras.classList.remove("red");
      let PythagorasResult = boolPythagoras(a, b, c);
      resultPythagoras.innerHTML = PythagorasResult;
    }
    //Find c
    else if (!isNaN(a) && !isNaN(b)) {
      aborc = "c";
      resultPythagoras.classList.remove("red");
      PythagorasResult = calcPythagoras(a, b);
      resultPythagoras.innerHTML = PythagorasResult;
    }
    //find b
    else if (!isNaN(a) && !isNaN(c)) {
      aborc = "b";
      resultPythagoras.classList.remove("red");
      PythagorasResult = calcPythagoras(a, c);
      resultPythagoras.innerHTML = PythagorasResult;
    }
    //find a
    else if (!isNaN(b) && !isNaN(c)) {
      aborc = "a";
      resultPythagoras.classList.remove("red");
      PythagorasResult = calcPythagoras(b, c);
      resultPythagoras.innerHTML = PythagorasResult;
    }
  }
}

function calcPythagoras(a, b) {
  resultPythagoras.classList.add("form__equation");
  let c = Math.sqrt(a ** 2 + b ** 2);
  c = parseFloat(s.toFixed(floatAccuration));
  if (aborc == "a") {
    let pythagorasResult = [
      `\\(${c}^2 = a^2 + ${b}^2)`,
      `\\(a^2 = ${c}^2 - ${b}^2)`,
      `\\(a = \\sqrt{${c}^2 - ${b}^2}\\)`,
      `\\(a = ${Math.sqrt(c ** 2 - b ** 2)})`,
    ];
    return pythagorasResult;
  }
  if (aborc == "b") {
    let pythagorasResult = [
      `\\(${c}^2 = ${a}^2 + ${b}^2)`,
      `\\(b^2 = ${c}^2 - ${a}^2)`,
      `\\(b = \\sqrt{${c}^2 - ${a}^2}\\)`,
      `\\(b = ${Math.sqrt(c ** 2 - a ** 2)})`,
    ];
    return pythagorasResult;
  }
  if (aborc == "c") {
    let pythagorasResult = [
      `\\(${c}^2 = ${a}^2 + ${b}^2)`,
      `\\(c^2 = ${a}^2 + ${b}^2)`,
      `\\(c = \\sqrt{${a}^2 + ${b}^2}\\)`,
      `\\(c = ${Math.sqrt(c ** 2 + b ** 2)})`,
    ];
    return pythagorasResult;
  }
}

function boolPythagoras(a, b, c) {
  if (parseFloat(Math.sqrt(a ** 2 + b ** 2)).toFixed(floatAccuration) == c) {
    return true;
  } else {
    return false;
  }
}
