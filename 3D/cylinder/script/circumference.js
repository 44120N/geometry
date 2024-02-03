let resultCircumference = document.getElementById("circumference");

function callCircumference() {
  let r = parseFloat(document.getElementById("rC").value);
  r = parseFloat(r.toFixed(floatAccuration));
  let C = parseFloat(document.getElementById("C").value);
  C = parseFloat(C.toFixed(floatAccuration));

  resultCircumference.innerHTML = "";

  if (r <= 0 || C <= 0) {
    resultCircumference.classList.remove("form__equation");
    let result = [];
    if (r <= 0) {
      resultCircumference.classList.add("red");
      result.push("Radius should be positive number");
    }
    if (C <= 0) {
      resultCircumference.classList.add("red");
      result.push("Circumference should be positive number");
    }
    resultCircumference.innerHTML = result.join("<br>");
  } else if (r > maxValue || C > maxValue) {
    resultCircumference.classList.remove("form__equation");
    let result = [];
    if (r > maxValue) {
      resultCircumference.classList.add("red");
      result.push("Radius: Number limit exceeded");
    }
    if (C > maxValue) {
      resultCircumference.classList.add("red");
      result.push("Circumference: Number limit exceeded");
    }
    resultCircumference.innerHTML = result.join("<br>");
  } else {
    if (!isNaN(C) && !isNaN(r)) {
      resultCircumference.classList.remove("red");
      let circumferenceResult = boolCircumference(r, C);
      resultCircumference.innerHTML = circumferenceResult;
    } else if (!isNaN(r)) {
      resultCircumference.classList.remove("red");
      let circumferenceResult = calcCircumference(r);
      resultCircumference.innerHTML = circumferenceResult;
    } else if (!isNaN(C)) {
      resultCircumference.classList.remove("red");
      let circumferenceResult = calcRadius_Circumference(C);
      resultCircumference.innerHTML = circumferenceResult;
    }
  }
}

function calcCircumference(r) {
  resultCircumference.classList.add("form__equation");
  let circumferenceResult = `\\(C = 2 × ${pi} × ${r} = ${parseFloat(
    (2 * Math.PI * r).toFixed(floatAccuration)
  )}\\)`;
  resultCircumference.innerHTML = circumferenceResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultCircumference]);
  }, 0);
  return circumferenceResult;
}

function calcRadius_Circumference(C) {
  resultCircumference.classList.add("form__equation");
  let circumferenceResult = `\\(r = \\frac{${C}}{2 × ${pi}} = ${parseFloat(
    (C / (2 * Math.PI)).toFixed(floatAccuration)
  )}\\)`;
  resultCircumference.innerHTML = circumferenceResult;
  setTimeout(function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultCircumference]);
  }, 0);
  return circumferenceResult;
}

function boolCircumference(r, C) {
  if (parseFloat((2 * Math.PI * r).toFixed(floatAccuration)) == C) {
    return true;
  } else {
    return false;
  }
}
