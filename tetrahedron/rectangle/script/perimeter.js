let resultPerimeter = document.getElementById("perimeter");

function callPerimeter() {
  let l = parseFloat(document.getElementById("lP").value);
  l = parseFloat(l.toFixed(floatAccuration));
  let w = parseFloat(document.getElementById("wP").value);
  w = parseFloat(w.toFixed(floatAccuration));
  let P = parseFloat(document.getElementById("P").value);
  P = parseFloat(P.toFixed(floatAccuration));

  resultPerimeter.innerHTML = "";

  if (l <= 0 || w <= 0 || P <= 0) {
    resultPerimeter.classList.remove("form__equation");
    let result = [];
    if (l <= 0) {
      resultPerimeter.classList.add("red");
      result.push("Length should be a positive number");
    }
    if (w <= 0) {
      resultPerimeter.classList.add("red");
      result.push("Width should be a positive number");
    }
    if (P <= 0) {
      resultPerimeter.classList.add("red");
      result.push("Perimeter should be a positive number");
    }
    resultPerimeter.innerHTML = result.join("<br>");
  } else if (l > maxValue || w > maxValue || P > maxValue) {
    resultPerimeter.classList.remove("form__equation");
    let result = [];
    if (l > maxValue) {
      resultPerimeter.classList.add("red");
      result.push("Length: Number limit exceeded");
    }
    if (w > maxValue) {
      resultPerimeter.classList.add("red");
      result.push("Width: Number limit exceeded");
    }
    if (P > maxValue) {
      resultPerimeter.classList.add("red");
      result.push("Perimeter: Number limit exeeded");
    }
    resultPerimeter.innerHTML = result.join("<br>");
  } else {
    if (!isNaN(P) && !isNaN(w) && !isNaN(l)) {
      resultPerimeter.classList.remove("red");
      let perimeterResult = boolPerimeter(l, w, P);
      resultPerimeter.innerHTML = perimeterResult;
    } else if (!isNaN(w) && !isNaN(l)) {
      resultPerimeter.classList.remove("red");
      let perimeterResult = calcPerimeter(l, w);
      resultPerimeter.innerHTML = perimeterResult;
    } else if (!isNaN(P) && !isNaN(l)) {
      resultPerimeter.classList.remove("red");
      let perimeterResult = calcWidth_Perimeter(P, l);
      resultPerimeter.innerHTML = perimeterResult;
    } else if (!isNaN(P) && !isNaN(w)) {
      resultPerimeter.classList.remove("red");
      let perimeterResult = calcLength_Perimeter(P, w);
      resultPerimeter.innerHTML = perimeterResult;
    }
  }
}

function calcPerimeter(l, w) {
  resultPerimeter.classList.add("form__equation");
  let perimeterResult = `\\(P = 2 × (${l} + ${w}) = ${2 * (l + w)}\\)`;
  resultPerimeter.innerHTML = perimeterResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
  }, 0);

  return perimeterResult;
}

function calcLength_Perimeter(P, w) {
  resultPerimeter.classList.add("form__equation");
  let perimeterResult = `\\(l = \\frac{${P} - 2 × ${w}}{2} = \\frac{${P}-${
    2 * w
  }}{2} = \\frac{${P - 2 * w}}{2} = ${parseFloat(
    ((P - 2 * w) / 2).toFixed(floatAccuration)
  )}\\)`;
  resultPerimeter.innerHTML = perimeterResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
  }, 0);
  return perimeterResult;
}

function calcWidth_Perimeter(P, l) {
  resultPerimeter.classList.add("form__equation");
  let perimeterResult = `\\(w = (${P} - 2 × ${l})/2 = ${parseFloat(
    (P - 2 * l) / 2
  ).toFixed(floatAccuration)}\\)`;
  resultPerimeter.innerHTML = perimeterResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
  }, 0);
  return perimeterResult;
}

function boolPerimeter(l, w, P) {
  if (parseFloat((2 * (l + w)).toFixed(floatAccuration)) == P) {
    return true;
  } else {
    return false;
  }
}
