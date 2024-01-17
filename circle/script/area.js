let resultArea = document.getElementById('area');
floatAccuration = 5;

function callArea() {
    let r = parseFloat(document.getElementById('rA').value);
    r = parseFloat(r.toFixed(floatAccuration));
    let A = parseFloat(document.getElementById('A').value);
    A = parseFloat(A.toFixed(floatAccuration));

    resultArea.innerHTML = "";

    if (r <= 0 || A <= 0) {
        resultArea.classList.remove("form__equation");
        let result = [];
        if (r <= 0) {
            resultArea.classList.add("red");
            result.push("Radius should be positive number");
        }
        if (A <= 0) {
            resultArea.classList.add("red");
            result.push("Area should be positive number");
        }
        resultArea.innerHTML = result.join("<br>");
    } else if (r > maxValue || A > maxValue) {
        resultArea.classList.remove("form__equation");
        let result = [];
        if (r > maxValue) {
            resultArea.classList.add("red");
            result.push("Radius: Number limit exceeded");
        }
        if (A > maxValue) {
            resultArea.classList.add("red");
            result.push("Area: Number limit exceeded");
        }
        resultArea.innerHTML = result.join("<br>");
    } else {
        if (!isNaN(A) && !isNaN(r)) {
            resultArea.classList.remove("red");
            let areaResult = boolArea(r, A);
            resultArea.innerHTML = areaResult;
        } else if (!isNaN(r)) {
            resultArea.classList.remove("red");
            let areaResult = calcArea(r);
            resultArea.innerHTML = areaResult;
        } else if (!isNaN(A)) {
            resultArea.classList.remove("red");
            let areaResult = calcRadius_Area(A);
            resultArea.innerHTML = areaResult;
        }
    }
}

function calcArea(r) {
    resultArea.classList.add("form__equation");
    let areaResult = `\\(A = ${pi} × ${r}^2 = ${pi} × ${r**2} = ${pi*r**2} = ${parseFloat((Math.PI*r**2).toFixed(floatAccuration))}\\)`;
    resultArea.innerHTML = areaResult;
    setTimeout(function () { 
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
    }, 0);
    return areaResult;
}

function calcRadius_Area(A) {
    resultArea.classList.add("form__equation");
    let areaResult = `\\(r = \\sqrt{\\frac{${A}}{${pi}}} = \\sqrt{${A/pi}} = ${parseFloat((Math.sqrt(A/Math.PI)).toFixed(floatAccuration))}\\)`;
    resultArea.innerHTML = areaResult;
    setTimeout(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
    }, 0);
    return areaResult;
}

function boolArea(r, A){
    if (parseFloat((Math.PI*r**2).toFixed(floatAccuration)) == A){
        return true
    } else{
        return false
    }
}