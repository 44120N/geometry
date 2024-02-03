let resultPythagoras = document.getElementById("pythagoras");
let aborc;

function callPythagoras() {
  let a = parseFloat(document.getElementById("aPy").value);
  a = parseFloat(a.toFixed(floatAccuration));
  let b = parseFloat(document.getElementById("bPy").value);
  b = parseFloat(b.toFixed(floatAccuration));
  let c = parseFloat(document.getElementById("cPy").value);
  c = parseFloat(c.toFixed(floatAccuration));

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
      resultPythagoras.classList.add("red");
      result.push("Side a should be positive number");
    }
    if (a > maxValue) {
      resultPythagoras.classList.add("red");
      result.push("Side a: Number limit exceeded");
    }
    if (b <= 0) {
      resultPythagoras.classList.add("red");
      result.push("Side b should be positive number");
    }
    if (b > maxValue) {
      resultPythagoras.classList.add("red");
      result.push("Side b: Number limit exceeded");
    }
    if (c <= 0) {
      resultPythagoras.classList.add("red");
      result.push("Side c should be positive number");
    }
    if (c > maxValue) {
      resultPythagoras.classList.add("red");
      result.push("Side c: Number limit exceeded");
    }
    resultPythagoras.innerHTML = result.join("<br>");
  } else {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      resultPythagoras.classList.remove("red");
      let PythagorasResult = boolPythagoras(a, b, c);
      resultPythagoras.innerHTML = PythagorasResult;
    }
    //find a
    else if (!isNaN(b) && !isNaN(c)) {
      aborc = "a";
      resultPythagoras.classList.remove("red");
      let PythagorasResult = calcPythagoras(b, c);
      resultPythagoras.innerHTML = PythagorasResult;
    }
    //find b
    else if (!isNaN(a) && !isNaN(c)) {
      aborc = "b";
      resultPythagoras.classList.remove("red");
      let PythagorasResult = calcPythagoras(a, c);
      resultPythagoras.innerHTML = PythagorasResult;
    }
    //find c
    else if (!isNaN(a) && !isNaN(b)) {
      aborc = "c";
      resultPythagoras.classList.remove("red");
      let PythagorasResult = calcPythagoras(a, b);
      resultPythagoras.innerHTML = PythagorasResult;
    }
  }
}

function calcPythagoras(arg1, arg2) {
  resultPythagoras.classList.add("form__equation");
  //arg1 = b; arg2 = c;
  if (aborc == "a") {
    let res = Math.sqrt(arg2 ** 2 - arg1 ** 2);
    res = parseFloat(res.toFixed(floatAccuration));
    let pythagorasResult = [
      `\\(c^2 = a^2 + b^2\\)`,
      `\\(a^2 = ${arg2}^2 - ${arg1}^2\\)`,
      `\\(a = \\sqrt{${arg2}^2 - ${arg1}^2}\\)`,
      `\\(a = ${res}\\)`,
    ];
    setTimeout(function () {
      resultPythagoras.innerHTML = pythagorasResult.join("<br>");
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPythagoras]);
    }, 0);
    return pythagorasResult;
  }
  //arg1 = a; arg2 = c;
  if (aborc == "b") {
    let res = Math.sqrt(arg2 ** 2 - arg1 ** 2);
    res = parseFloat(res.toFixed(floatAccuration));
    let pythagorasResult = [
      `\\(c^2 = a^2 + b^2\\)`,
      `\\(b^2 = ${arg2}^2 - ${arg1}^2\\)`,
      `\\(b = \\sqrt{${arg2}^2 - ${arg1}^2}\\)`,
      `\\(b = ${res}\\)`,
    ];
    setTimeout(function () {
      resultPythagoras.innerHTML = pythagorasResult.join("<br>");
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPythagoras]);
    }, 0);
    return pythagorasResult;
  }
  //arg1 = a; arg2 = b;
  if (aborc == "c") {
    let res = Math.sqrt(arg1 ** 2 + arg2 ** 2);
    res = parseFloat(res.toFixed(floatAccuration));
    let pythagorasResult = [
      `\\(c^2 = a^2 + b^2\\)`,
      `\\(c^2 = ${arg1}^2 + ${arg2}^2\\)`,
      `\\(c = \\sqrt{${arg1}^2 + ${arg2}^2}\\)`,
      `\\(c = ${res}\\)`,
    ];
    setTimeout(function () {
      resultPythagoras.innerHTML = pythagorasResult.join("<br>");
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPythagoras]);
    }, 0);
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
