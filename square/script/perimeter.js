let resultPerimeter = document.getElementById('perimeter');

function callPerimeter() {
    let a = parseFloat(document.getElementById('aP').value);
    a = parseFloat(a.toFixed(floatAccuration));
    let P = parseFloat(document.getElementById('P').value);
    P = parseFloat(P.toFixed(floatAccuration));

    resultPerimeter.innerHTML = "";

    if (a <= 0 || P<=0) {
        resultPerimeter.classList.remove("form__equation");
        let result = [];
        if (a <= 0) {
            resultPerimeter.classList.add("red");
            result.push("Side a should be positive number");
        }
        if (P <= 0) {
            resultPerimeter.classList.add("red");
            result.push("Perimeter should be positive number");
        }
        resultPerimeter.innerHTML = result.join("<br>");
    } else if (a > maxValue || P > maxValue) {
        resultPerimeter.classList.remove("form__equation");
        let result = [];
        if (a > maxValue) {
            resultPerimeter.classList.add("red");
            result.push("Side a: Number limit exceeded");
        }
        if (P > maxValue) {
            resultPerimeter.classList.add("red");
            result.push("Perimeter: Number limit exceeded");
        }
        resultPerimeter.innerHTML = result.join("<br>");
    } else {
        if (!isNaN(P) && !isNaN(a)) {
            resultPerimeter.classList.remove("red");
            let perimeterResult = boolPerimeter(a, P);
            resultPerimeter.innerHTML = perimeterResult;
        }  else if (!isNaN(a)) {
            resultPerimeter.classList.remove("red");
            let perimeterResult = calcPerimeter(a);
            resultPerimeter.innerHTML = perimeterResult;
        } else if (!isNaN(P)) {
            resultPerimeter.classList.remove("red");
            let perimeterResult = calcSide_Perimeter(P);
            resultPerimeter.innerHTML = perimeterResult;
        }
    }
}

function calcPerimeter(a) {
    resultPerimeter.classList.add("form__equation");
    let perimeterResult = `\\(P = 4 × ${a} = ${parseFloat((4*a).toFixed(floatAccuration))}\\)`;
    resultPerimeter.innerHTML = perimeterResult;
    setTimeout(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
    }, 0);
    return perimeterResult;
}

function calcSide_Perimeter(P) {
    resultPerimeter.classList.add("form__equation");
    let perimeterResult = `\\(a = \\frac{${P}}{4} = ${parseFloat((P/4).toFixed(floatAccuration))}\\)`;
    resultPerimeter.innerHTML = perimeterResult;
    setTimeout(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
    }, 0);
    return perimeterResult;
}

function boolPerimeter(a, P){
    if (parseFloat((4*a).toFixed(floatAccuration)) == P){
        return true
    } else{
        return false
    }
}