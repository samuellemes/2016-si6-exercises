var num = process.argv[2];
var fact = 1;

function calculaFatorial(num) {
    for(i=1; i<=num; i++){
        fact *= i;
    }
}

function messege() {
    console.log("The factorial of " + num + " is " + fact + "!");
}

calculaFatorial(num);
messege();