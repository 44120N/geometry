let resultPerimeter = document.getElementById("perimeter");
let perimeterFind;

function callPerimeter() {
  let a = parseFloat(document.getElementById("a").value);
  a = parseFloat(a.toFixed(floatAccuration));
  let b = parseFloat(document.getElementById("b").value);
  b = parseFloat(b.toFixed(floatAccuration));
  let c = parseFloat(document.getElementById("c").value);
  c = parseFloat(c.toFixed(floatAccuration));
  let d = parseFloat(document.getElementById("d").value);
  d = parseFloat(d.toFixed(floatAccuration));

  let P = parseFloat(document.getElementById("P").value);
  P = parseFloat(P.toFixed(floatAccuration));

  resultPerimeter.innerHTML = "";

  if (
    a <= 0 ||
    b <= 0 ||
    c <= 0 ||
    d <= 0 ||
    P <= 0 ||
    a > maxValue ||
    b > maxValue ||
    c > maxValue ||
    d > maxValue ||
    P > maxValue
  ) {
    resultPerimeter.classList.remove("form__equation");
    let result = [];
    if (a <= 0) {
      resultPerimeter.classList.add("red");
      result.push("Side a should be positive number");
    }
    if (a > maxValue) {
      resultPerimeter.classList.add("red");
      result.push("Side a: Number limit exceeded");
    }
    if (b <= 0) {
      resultPerimeter.classList.add("red");
      result.push("Side b should be positive number");
    }
    if (b > maxValue) {
      resultPerimeter.classList.add("red");
      result.push("Side b: Number limit exceeded");
    }
    if (c <= 0) {
      resultPerimeter.classList.add("red");
      result.push("Side c should be positive number");
    }
    if (c > maxValue) {
      resultPerimeter.classList.add("red");
      result.push("Side c: Number limit exceeded");
    }
    if (d <= 0) {
      resultPerimeter.classList.add("red");
      result.push("Side d should be a positive number");
    }
    if (d > maxValue) {
      resultPerimeter.classList.add("red");
      result.push("Side d: Number limit exceeded");
    }
    if (P <= 0) {
      resultPerimeter.classList.add("red");
      result.push("Perimeter should be positive number");
    }
    if (P > maxValue) {
      resultPerimeter.classList.add("red");
      result.push("Perimeter: Number limit exceeded");
    }
    resultPerimeter.innerHTML = result.join("<br>");
  } else {
    //find true/false
    if (!isNaN(P) && !isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d)) {
      resultPerimeter.classList.remove("red");
      let perimeterResult = boolPerimeter(a, b, c, d, P);
      resultPerimeter.innerHTML = perimeterResult;
    }
    //find P
    else if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d)) {
      perimeterFind = "P";
      resultPerimeter.classList.remove("red");
      let perimeterResult = calcPerimeter(a, b, c, d);
      resultPerimeter.innerHTML = perimeterResult;
    }
    //find a
    else if (!isNaN(P) && !isNaN(b) && !isNaN(c) && !isNaN(d)) {
      perimeterFind = "a";
      resultPerimeter.classList.remove("red");
      let perimeterResult = calcSide_Perimeter(P, b, c, d);
      resultPerimeter.innerHTML = perimeterResult;
    }
    //find b
    else if (!isNaN(P) && !isNaN(a) && !isNaN(c) && !isNaN(d)) {
      perimeterFind = "b";
      resultPerimeter.classList.remove("red");
      let perimeterResult = calcSide_Perimeter(P, a, c, d);
      resultPerimeter.innerHTML = perimeterResult;
    }
    //find c
    else if (!isNaN(P) && !isNaN(a) && !isNaN(b) && !isNaN(d)) {
      perimeterFind = "c";
      resultPerimeter.classList.remove("red");
      let perimeterResult = calcSide_Perimeter(P, a, b, d);
      resultPerimeter.innerHTML = perimeterResult;
    }
    //find d
    else if (!isNaN(P) && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
      perimeterFind = "d";
      resultPerimeter.classList.remove("red");
      let perimeterResult = calcSide_Perimeter(P, a, b, c);
      resultPerimeter.innerHTML = perimeterResult;
    }
  }
}

function calcPerimeter(a, b, c, d) {
  let arr = [a, b, c, d];
  //implement d to the code below
  if (arr[0] + arr[1] <= arr[2]) {
    return "Make sure a + b > c";
  } else if (arr[0] + arr[2] <= arr[1]) {
    return "Make sure a + c > b";
  } else if (arr[1] + arr[2] <= arr[0]) {
    return "Make sure b + c > a";
  } else {
    resultPerimeter.classList.add("form__equation");
    let perimeterResult = `\\(P = ${a} + ${b} + ${c} + ${d} = ${parseFloat(
      (a + b + c + d).toFixed(floatAccuration)
    )}\\)`;
    resultPerimeter.innerHTML = perimeterResult;
    setTimeout(function () {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
    }, 0);

    return perimeterResult;
  }
}

function calcSide_Perimeter(P, a, b, c) {
  res = P - a - b - c;
  let sides = [a, b, c, res];
  sides.sort();
  if (sides[0] + sides[1] + sides[2] <= sides[3]) {
    return `There is no solution`;
  } else {
    resultPerimeter.classList.add("form__equation");
    let perimeterResult = `\\(${perimeterFind} = ${P} - ${a} - ${b} - ${c} = ${parseFloat(
      (P - a - b - c).toFixed(floatAccuration)
    )}\\)`;
    resultPerimeter.innerHTML = perimeterResult;
    setTimeout(function () {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
    }, 0);
    return perimeterResult;
  }
}

function boolPerimeter(a, b, c, d, P) {
  // let sides = [a, b, c, d];
  // sides.sort();
  // if (sides[0] + sides[1] <= sides[2]) {
  //   return "The trapezoid doesn't exist";
  // }
  if (parseFloat((a + b + c + d).toFixed(floatAccuration)) == P) {
    return true;
  } else {
    return false;
  }
}
