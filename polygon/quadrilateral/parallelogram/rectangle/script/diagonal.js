let resultDiagonal = document.getElementById("diagonal");

function callDiagonal() {
  let l = parseFloat(document.getElementById("lD").value);
  l = parseFloat(l.toFixed(floatAccuration));
  let w = parseFloat(document.getElementById("wD").value);
  w = parseFloat(w.toFixed(floatAccuration));
  let d = parseFloat(document.getElementById("d").value);
  d = parseFloat(d.toFixed(floatAccuration));

  resultDiagonal.innerHTML = "";

  if (l <= 0 || w <= 0 || d <= 0) {
    resultDiagonal.classList.remove("form__equation");
    let result = [];
    if (l <= 0) {
      resultDiagonal.classList.add("red");
      result.push("Length should be a positive number");
    }
    if (w <= 0) {
      resultDiagonal.classList.add("red");
      result.push("Width should be a positive number");
    }
    if (d <= 0) {
      resultDiagonal.classList.add("red");
      result.push("Diagonal should be a positive number");
    }
    resultDiagonal.innerHTML = result.join("<br>");
  } else if (l > maxValue || w > maxValue || d > maxValue) {
    resultDiagonal.classList.remove("form__equation");
    let result = [];
    if (l > maxValue) {
      resultDiagonal.classList.add("red");
      result.push("Length: Number limit exceeded");
    }
    if (w > maxValue) {
      resultDiagonal.classList.add("red");
      result.push("Width: Number limit exceeded");
    }
    if (d > maxValue) {
      resultDiagonal.classList.add("red");
      result.push("Diagonal: Number limit exeeded");
    }
    resultDiagonal.innerHTML = result.join("<br>");
  } else {
    if (!isNaN(d) && !isNaN(w) && !isNaN(l)) {
      resultDiagonal.classList.remove("red");
      let diagonalResult = boolDiagonal(l, w, d);
      resultDiagonal.innerHTML = diagonalResult;
    } else if (!isNaN(w) && !isNaN(l)) {
      resultDiagonal.classList.remove("red");
      let diagonalResult = calcDiagonal(l, w);
      resultDiagonal.innerHTML = diagonalResult;
    } else if (!isNaN(d) && !isNaN(l)) {
      resultDiagonal.classList.remove("red");
      let diagonalResult = calcWidth_diagonal(d, l);
      resultDiagonal.innerHTML = diagonalResult;
    } else if (!isNaN(d) && !isNaN(w)) {
      resultDiagonal.classList.remove("red");
      let diagonalResult = calcLength_diagonal(d, w);
      resultDiagonal.innerHTML = diagonalResult;
    }
  }
}

function calcDiagonal(l, w) {
  resultDiagonal.classList.add("form__equation");
  let diagonalResult = `\\(d = \\sqrt{${l}^2 + ${w}^2} = \\sqrt{${l ** 2} + ${
    w ** 2
  }} = \\sqrt{${l ** 2 + w ** 2}} = ${Math.sqrt(l ** 2 + w ** 2)}\\)`;
  resultDiagonal.innerHTML = diagonalResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultDiagonal]);
  }, 0);

  return diagonalResult;
}

function calcLength_diagonal(d, w) {
  resultDiagonal.classList.add("form__equation");
  let diagonalResult = `\\(l = \\sqrt{${d}^2 - ${w}^2} = \\sqrt{${d ** 2} - ${
    w ** 2
  }} = \\sqrt{${d ** 2 - w ** 2}} = ${Math.sqrt(d ** 2 - w ** 2)}\\)`;
  resultDiagonal.innerHTML = diagonalResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultDiagonal]);
  }, 0);
  return diagonalResult;
}

function calcWidth_diagonal(d, l) {
  resultDiagonal.classList.add("form__equation");
  let diagonalResult = `\\(w = \\sqrt{${d}^2 - ${l}^2} = \\sqrt{${d ** 2} - ${
    l ** 2
  }} = \\sqrt{${d ** 2 - l ** 2}} = ${Math.sqrt(d ** 2 - l ** 2)}\\)`;
  resultDiagonal.innerHTML = diagonalResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultDiagonal]);
  }, 0);
  return diagonalResult;
}

function boolDiagonal(l, w, d) {
  if (parseFloat(Math.sqrt(l ** 2 + w ** 2).toFixed(floatAccuration)) == d) {
    return true;
  } else {
    return false;
  }
}
