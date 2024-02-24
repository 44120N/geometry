let resultDiameter = document.getElementById("diameter");

function callDiameter() {
  let r = parseFloat(document.getElementById("rD").value);
  r = parseFloat(r.toFixed(floatAccuration));
  let d = parseFloat(document.getElementById("d").value);
  d = parseFloat(d.toFixed(floatAccuration));

  resultDiameter.innerHTML = "";

  if (r <= 0 || d <= 0) {
    resultDiameter.classList.remove("form__equation");
    let result = [];
    if (r <= 0) {
      resultDiameter.classList.add("red");
      result.push("Radius should be positive number");
    }
    if (d <= 0) {
      resultDiameter.classList.add("red");
      result.push("Diameter should be positive number");
    }
    resultDiameter.innerHTML = result.join("<br>");
  } else if (r > maxValue || d > maxValue) {
    resultDiameter.classList.remove("form__equation");
    let result = [];
    if (r > maxValue) {
      resultDiameter.classList.add("red");
      result.push("Radius: Number limit exceeded");
    }
    if (d > maxValue) {
      resultDiameter.classList.add("red");
      result.push("Diameter: Number limit exceeded");
    }
    resultDiameter.innerHTML = result.join("<br>");
  } else {
    if (!isNaN(d) && !isNaN(r)) {
      resultDiameter.classList.remove("red");
      let diameterResult = boolDiameter(r, d);
      resultDiameter.innerHTML = diameterResult;
    } else if (!isNaN(r)) {
      resultDiameter.classList.remove("red");
      let diameterResult = calcDiameter(r);
      resultDiameter.innerHTML = diameterResult;
    } else if (!isNaN(d)) {
      resultDiameter.classList.remove("red");
      let diameterResult = calcRadius_Diameter(d);
      resultDiameter.innerHTML = diameterResult;
    }
  }
}

function calcDiameter(r) {
  resultDiameter.classList.add("form__equation");
  let diameterResult = `\\(d = 2 × ${r} = ${parseFloat(
    (2 * r).toFixed(floatAccuration)
  )}\\)`;
  resultDiameter.innerHTML = diameterResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultDiameter]);
  }, 0);
  return diameterResult;
}

function calcRadius_Diameter(d) {
  resultDiameter.classList.add("form__equation");
  let diameterResult = `\\(r = \\frac{${d}}{2} = ${parseFloat(
    (d / 2).toFixed(floatAccuration)
  )}\\)`;
  resultDiameter.innerHTML = diameterResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultDiameter]);
  }, 0);

  return diameterResult;
}

function boolDiameter(r, d) {
  if (parseFloat((r * 2).toFixed(floatAccuration)) == d) {
    return true;
  } else {
    return false;
  }
}
