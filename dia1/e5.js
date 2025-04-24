for (let i = 0; i < 5; i++)  {
    let cuadrado = '';
    for (let j = 0; j < 5; j++) {
        if (i === 0 || i === 4 || j === 0 || j === 4) {
            cuadrado += '* ';
        }
        else {
            cuadrado += '  ';
        }
    }
    console.log(cuadrado);
}