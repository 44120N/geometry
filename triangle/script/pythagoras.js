let resultPythagoras = document.getElementById("pythagoras");
let aborc;

function callPythagoras(){
    let a = parseFloat(document.getElementById("aPy").value);
    a = parseFloatO(a.toFixed(floatAccuration));
    let b = parseFloat(document.getElementById("bPy").value);
    b = parseFloatO(a.toFixed(floatAccuration));
    let c = parseFloat(document.getElementById("cPy").value);
    c = parseFloatO(a.toFixed(floatAccuration));
    resultPythagoras.innerHTML = "";

    if (a <= 0 || b <= 0 || c <= 0
        || a > maxValue || b > maxValue || c > maxValue) {
        resultPythagoras.classList.remove("form__equation");
        let result = [];
        if (a <= 0) {
            resultPythagoras.classList.add("red");
            result.push("Side a should be positive number");
        }
        if (a > maxValue) {
            resultPythagoras.classList.add("red");
            result.push("Side a: Number limit exceeded");
        }
        if (b <= 0) {
            resultPythagoras.classList.add("red");
            result.push("Side b should be positive number");
        }
        if (b > maxValue) {
            resultPythagoras.classList.add("red");
            result.push("Side b: Number limit exceeded");
        }
        if (c <= 0) {
            resultPythagoras.classList.add("red");
            result.push("Side c should be positive number");
        }
        if (c > maxValue) {
            resultPythagoras.classList.add("red");
            result.push("Side c: Number limit exceeded");
        }
        resultPythagoras.innerHTML = result.join("<br>");
    } else {
        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            resultPythagoras.classList.remove("red");
            let PythagotasResult = boolHeron(a, b, c)
            resultPythagoras.innerHTML = PythagotasResult;
        } else if (!isNaN(a) && !isNaN(b)) {
            aborc = 'c';
            resultPythagoras.classList.remove("red");
            PythagotasResult = calcHeron(a, b);
            resultPythagoras.innerHTML = PythagotasResult;
        } else if (!isNaN(a) && !isNaN(c)) {
            aborc = 'b';
            resultPythagoras.classList.remove("red");
            PythagotasResult = calcHeron(a, c);
            resultPythagoras.innerHTML = PythagotasResult;
        } else if (!isNaN(b) && !isNaN(c)) {
            aborc = 'a';
            resultPythagoras.classList.remove("red");
            PythagotasResult = calcHeron(b, c);
            resultPythagoras.innerHTML = PythagotasResult;
        }
    }
}

function calcPythagoras(a, b){
    resultPythagoras.classList.add("form__equation");
    let c = Math.sqrt(a**2 + b**2)
    s = parseFloat(s.toFixed(floatAccuration));
    if(aborc == 'a'){
        let pythagorasResult = [`\\(${c}^2 = a^2 + ${b}^2)`,
                                `\\(a^2 = ${c}^2 - ${b}^2)`,
                                `\\(a = \\sqrt{${c}^2 - ${b}^2}\\)`,
                                `\\(a = ${Math.sqrt(c**2 - b**2)})`];
    } else if(aborc == 'b'){
        let pythagorasResult = [`\\(${c}^2 = ${a}^2 + b^2)`,
                                `\\(b^2 = ${c}^2 - ${a}^2)`,
                                `\\(b = \\sqrt{${c}^2 - ${a}^2}\\)`,
                                `\\(b = ${Math.sqrt(c**2 - a**2)})`];
    } else if(aborc == 'c'){
    }
}