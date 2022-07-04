const suma = (numA, numB) => {
    return numA + numB;
}

const resta = (numA, numB) => {
    return numA - numB;
}

const multiplica = (numA, numB) => {
    return numA * numB;
}

const divide = (numA, numB) => {
    if (numB == 0) {
        return "No se puede dividir por cero."
    } else {
        return numA / numB;
    }
}

const potencia = (numA, numB) => {
    return numA ** numB;
}

module.exports = {suma, resta, multiplica, divide, potencia};



