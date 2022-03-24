function impares() {
    let num1 = 0, num2 = 0;
    num1 = prompt("Ingresa el primero número");
    num2 = prompt("Ingresa el segundo número");
    num1 = Number(num1);
    num2 = Number(num2);
    let primero = true;
    let cadena = '';
    if (num1 < num2) {
        for (num1; num1 < num2; num1++) {
            if (primero) {
                if (num1 % 2 == 1) {
                    cadena = cadena + String(num1);
                    primero = false;
                }
            } else {
                2
                if (num1 % 2 == 1) {
                    cadena = cadena + ',' + String(num1);
                }
            }
        }

    } else {
        for (num2; num2 < num1; num2++) {
            if (primero) {
                if (num2 % 2 == 1) {
                    cadena = cadena + String(num2);
                    primero = false;
                }
            } else {
                if (num2 % 2 == 1) {
                    cadena = cadena + ',' + String(num2);
                }
            }
        }

    }
    alert("Favor de ver el resultado en la consola del navegador.")
    console.log(cadena);
    cadena = '';

}
//impares();


function tablas() {
    let num = prompt('Ingresa el número del que requieres la tabla de multiplicar');
    num = Number(num);
    for (let i = 1; i < 11; i++) {
        console.log(num + '*' + i + '=' + (num * i));
    }

    let continuar = prompt('Desea ingresar otro número? Y=Si, N=cualquier otra tecla');
    continuar = String(continuar.toUpperCase());
    alert("Favor de ver el resultado en la consola del navegador.")

    if (continuar === 'Y') {
        tablas();
    } else {
        alert('Gracias por utilizar nuestro sistemas de tablas de multiplicar.')
    }
}
//tablas();

function ordena() {
    let arrnumeros = [];
    let numeros = prompt('Ingresa el total de números a ordenar');
    numeros = Number(numeros);
    for (let i = 0; i < numeros; i++) {
        let numero = prompt('Ingresa el valor del número' + (i+1));
        numero = Number(numero);
        arrnumeros[i] = numero;
    }
    alert("Favor de ver el resultado en la consola del navegador.")

    arrnumeros.sort(function (a, b) { return a - b }); // --> 3, 12, 23
    console.log(arrnumeros);
}

//ordena();

function coincidencias() {
    const nacionalidades = [];
    let numeros = prompt('Ingresa el número de nacionalidades a ingresar');
    numeros = Number(numeros);
    for (let i = 0; i < numeros; i++) {
        let numero = prompt('Ingresa la nacionalidad número' + (i+1));
        numero = String(numero);
        nacionalidades[i] = numero;
    }
    let primero = true;
    let valorT = '';
    let contador = 0;
    alert("Favor de ver el resultado en la consola del navegador.")

    nacionalidades.forEach(function (nacionalidad) {
        nacionalidades.forEach(function (nacionalidad2) {
            if (!valorT.toLowerCase().includes(nacionalidad2.toLowerCase())) {
                if (nacionalidad.toLowerCase() == nacionalidad2.toLowerCase()) {
                    contador++;
                }
            }
        })
        if (contador > 0) {
            console.log(nacionalidad + ":" + contador);
            contador = 0;
        }
        if (primero) {
            valorT = valorT + nacionalidad;
            primero = false;
        } else {
            valorT = valorT + ',' + nacionalidad;
        }
    })
}
//coincidencias();

function fizzbuzz() {
    let num1 = prompt('Ingresa el rango mínimo');
    let num2 = prompt('Ingresa el rango máximo');
    for (num1; num1 <= num2; num1++) {
        if (num1 % 3 == 0) {
            if (num1 % 5 == 0) {
                console.log('FizzBuzz')
            } else {
                console.log('Fizz')
            }
        }
        else if (num1 % 5 == 0) {
            console.log('Buzz')
        }
        else {
            console.log(num1);
        }
    }
    alert("Favor de ver el resultado en la consola del navegador.")

}
//fizzbuzz();

function palabraEnOrden() {

    let arr = []
    let numeros = prompt('Ingresa el número de palabras a ordenar');
    numeros = Number(numeros);
    for (let i = 0; i < numeros; i++) {
        let numero = prompt('Ingresa la palabra número' + (i+1));
        numero = String(numero);
        arr[i] = numero;
    }
  
    const arrayAbecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let newarray = [];
    arrayAbecedario.forEach(function (letter) {
        arrayAbecedario.forEach(function (letter2) {
            arrayAbecedario.forEach(function (letter3) {
                arr.forEach(function (newar) {
                    if (newar.toLowerCase().startsWith(letter.toLowerCase() + letter2.toLowerCase() + letter3.toLowerCase(), 0)) {
                        newarray.push(newar);
                    }
                })
            })
        })
    })
    alert("Favor de ver el resultado en la consola del navegador.")

    console.log(newarray)
}
