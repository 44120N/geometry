let resultArea = document.getElementById("area");

function callArea() {
  let l = parseFloat(document.getElementById("lA").value);
  l = parseFloat(l.toFixed(floatAccuration));
  let w = parseFloat(document.getElementById("wA").value);
  w = parseFloat(w.toFixed(floatAccuration));
  let A = parseFloat(document.getElementById("A").value);
  A = parseFloat(A.toFixed(floatAccuration));

  resultArea.innerHTML = "";

  if (l <= 0 || w <= 0 || A <= 0) {
    resultArea.classList.remove("form__equation");
    let result = [];
    if (l <= 0) {
      resultArea.classList.add("red");
      result.push("Length should be positive number");
    }
    if (w <= 0) {
      resultArea.classList.add("red");
      result.push("Width should be positive number");
    }
    if (A <= 0) {
      resultArea.classList.add("red");
      result.push("Area should be positive number");
    }
    resultArea.innerHTML = result.join("<br>");
  } else if (l > maxValue || w > maxValue || A > maxValue) {
    resultArea.classList.remove("form__equation");
    let result = [];
    if (l > maxValue) {
      resultArea.classList.add("red");
      result.push("Length: Number limit exceeded");
    }
    if (w > maxValue) {
      resultArea.classList.add("red");
      result.push("Width: Number limit exceeded");
    }
    if (A > maxValue) {
      resultArea.classList.add("red");
      result.push("Area: Number limit exceeded");
    }
    resultArea.innerHTML = result.join("<br>");
  } else {
    if (!isNaN(A) && !isNaN(l) && !isNaN(w)) {
      resultArea.classList.remove("red");
      let areaResult = boolArea(l, w, A);
      resultArea.innerHTML = areaResult;
    } else if (!isNaN(l) && !isNaN(w)) {
      resultArea.classList.remove("red");
      let areaResult = calcArea(l, w);
      resultArea.innerHTML = areaResult;
    } else if (!isNaN(A) && !isNaN(l)) {
      resultArea.classList.remove("red");
      let areaResult = calcWidth(A, l);
      resultArea.innerHTML = areaResult;
    } else if (!isNaN(A) && !isNaN(w)) {
      resultArea.classList.remove("red");
      let areaResult = calcLength(A, w);
      resultArea.innerHTML = areaResult;
    }
  }
}

function calcArea(l, w) {
  resultArea.classList.add("form__equation");
  let areaResult = `\\(A = ${l} × ${w} = ${parseFloat(
    (l * w).toFixed(floatAccuration)
  )}\\)`;
  resultArea.innerHTML = areaResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
  }, 0);
  return areaResult;
}

function calcLength(A, w) {
  resultArea.classList.add("form__equation");
  let areaResult = `\\(l = \\frac{${A}}{${w}} = ${parseFloat(
    (A / w).toFixed(floatAccuration)
  )}\\)`;
  resultArea.innerHTML = areaResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
  }, 0);
  return areaResult;
}

function calcWidth(A, l) {
  resultArea.classList.add("form__equation");
  let areaResult = `\\(h = \\frac{${A}}{${l}} = ${parseFloat(
    (A / l).toFixed(floatAccuration)
  )}\\)`;
  resultArea.innerHTML = areaResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
  }, 0);
  return areaResult;
}

function boolArea(l, w, A) {
  if (parseFloat((l * w).toFixed(floatAccuration)) == A) {
    return true;
  } else {
    return false;
  }
}
