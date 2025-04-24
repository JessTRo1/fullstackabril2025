for (let i = 0; i < 5; i++) {
    let triangulo = "";
    for (let j = 0; j < 5; j++) {
        if (i <= j) {
            triangulo += "* ";
        } 
        else {
            triangulo += "  ";
        }
    }
    console.log(triangulo);  
}
