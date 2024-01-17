let resultDiagonal = document.getElementById('diagonal');

function callDiagonal() {
    let a = parseFloat(document.getElementById('aD').value);
    a = parseFloat(a.toFixed(floatAccuration));
    let d = parseFloat(document.getElementById('d').value);
    d = parseFloat(d.toFixed(floatAccuration));

    resultDiagonal.innerHTML = "";

    if (a <= 0 || d<=0) {
        resultDiagonal.classList.remove("form__equation");
        let result = [];
        if (a <= 0) {
            resultDiagonal.classList.add("red");
            result.push("Side a should be positive number");
        }
        if (d <= 0) {
            resultDiagonal.classList.add("red");
            result.push("Diagonal should be positive number");
        }
        resultDiagonal.innerHTML = result.join("<br>");
    } else if (a > maxValue || d > maxValue) {
        resultDiagonal.classList.remove("form__equation");
        let result = [];
        if (a > maxValue) {
            resultDiagonal.classList.add("red");
            result.push("Side a: Number limit exceeded");
        }
        if (d > maxValue) {
            resultDiagonal.classList.add("red");
            result.push("Diagonal: Number limit exceeded");
        }
        resultDiagonal.innerHTML = result.join("<br>");
    } else {
        if (!isNaN(d) && !isNaN(a)) {
            resultDiagonal.classList.remove("red");
            let diagonalResult = boolDiagonal(a, d);
            resultDiagonal.innerHTML = diagonalResult;
        }  else if (!isNaN(a)) {
            resultDiagonal.classList.remove("red");
            let diagonalResult = calcDiagonal(a);
            resultDiagonal.innerHTML = diagonalResult;
        } else if (!isNaN(d)) {
            resultDiagonal.classList.remove("red");
            let diagonalResult = calcSide_Diagonal(d);
            resultDiagonal.innerHTML = diagonalResult;
        }
    }
}

function calcDiagonal(a) {
    resultDiagonal.classList.add("form__equation");
    let diagonalResult = `\\(d = ${a} \\sqrt{2} = ${parseFloat((a * Math.sqrt(2)).toFixed(floatAccuration))}\\)`;
    resultDiagonal.innerHTML = diagonalResult;
    setTimeout(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultDiagonal]);
    }, 0);
    return diagonalResult;
}

function calcSide_Diagonal(d) {
    resultDiagonal.classList.add("form__equation");
    let diagonalResult = `\\(a = \\frac{${d}}{\\sqrt{2}} = ${parseFloat((d/Math.sqrt(2)).toFixed(floatAccuration))}\\)`;
    resultDiagonal.innerHTML = diagonalResult;
    setTimeout(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultDiagonal]);
    }, 0);

    return diagonalResult;
}

function boolDiagonal(a, d){
    if (parseFloat((a*Math.sqrt(2)).toFixed(floatAccuration)) == d){
        return true
    } else {
        return false
    }
}