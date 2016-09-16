var bmi, peso, altura;

peso = process.argv[2];
altura = process.argv[3];

function calcBMI() {
    var tmp = peso/(altura*altura);
    return tmp;
}

bmi = calcBMI();

console.log("BMI: "+ bmi);