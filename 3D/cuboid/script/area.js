let resultArea = document.getElementById("area");

function callArea() {
  let a = parseFloat(document.getElementById("aA").value);
  a = parseFloat(a.toFixed(floatAccuration));
  let A = parseFloat(document.getElementById("A").value);
  A = parseFloat(A.toFixed(floatAccuration));

  resultArea.innerHTML = "";

  if (a <= 0 || A <= 0) {
    resultArea.classList.remove("form__equation");
    let result = [];
    if (a <= 0) {
      resultArea.classList.add("red");
      result.push("Side a should be positive number");
    }
    if (A <= 0) {
      resultArea.classList.add("red");
      result.push("Area should be positive number");
    }
    resultArea.innerHTML = result.join("<br>");
  } else if (a > maxValue || A > maxValue) {
    resultArea.classList.remove("form__equation");
    let result = [];
    if (a > maxValue) {
      resultArea.classList.add("red");
      result.push("Side a: Number limit exceeded");
    }
    if (A > maxValue) {
      resultArea.classList.add("red");
      result.push("Area: Number limit exceeded");
    }
    resultArea.innerHTML = result.join("<br>");
  } else {
    if (!isNaN(A) && !isNaN(a)) {
      resultArea.classList.remove("red");
      let areaResult = boolArea(a, A);
      resultArea.innerHTML = areaResult;
    } else if (!isNaN(a)) {
      resultArea.classList.remove("red");
      let areaResult = calcArea(a);
      resultArea.innerHTML = areaResult;
    } else if (!isNaN(A)) {
      resultArea.classList.remove("red");
      let areaResult = calcSide(A);
      resultArea.innerHTML = areaResult;
    }
  }
}

function calcArea(a) {
  resultArea.classList.add("form__equation");
  let areaResult = `\\(A = ${a}^2 = ${parseFloat(
    (a ** 2).toFixed(floatAccuration)
  )}\\)`;
  resultArea.innerHTML = areaResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
  }, 0);
  return areaResult;
}

function calcSide(A) {
  resultArea.classList.add("form__equation");
  let areaResult = `\\(a = \\sqrt{${A}}  = ${parseFloat(
    Math.sqrt(A).toFixed(floatAccuration)
  )}\\)`;
  resultArea.innerHTML = areaResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
  }, 0);
  return areaResult;
}

function boolArea(a, A) {
  if (parseFloat((a ** 2).toFixed(floatAccuration)) == A) {
    return true;
  } else {
    return false;
  }
}
