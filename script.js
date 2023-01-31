addition = 30 + 25
subtraction = -30 - (-25)
division = 80 / 3
rest = 80 % 3
addition += 5
addition -= 3

// caminho_5km && corro_2km, passo_o_dia_bem
// levanto_cedo || antes_das_8h, saio_tranquilo
// !termino_o_trabalho || !tenho_compromisso, saio_tarde


// 1.3

// 1.2.1 - Se caminho 5Km e corro 2Km, passo o dia bem.

var caminho = '5Km'
var corro = '2Km'

if(caminho === '5Km' && corro === '2Km'){
    console.log("Passo o dia bem.")
}

// 1.2.2 - Se levanto cedo OU antes das 8, saio tranquilo.

var levanto = 'cedo'

if(levanto === 'cedo' || levanto === 'antes das 8'){
    console.log("Saio tranquilo.")
}

// 1.2.3 - Se NÃO termino o trabalho ou NÃO tenho compromisso, saio tarde.

var termino = 'o trabalho'
var tenho = 'compromisso'

if(!termino === 'o trabalho' || !tenho === 'compromisso'){
    console.log("Saio tarde.")
}



// 1.3
var num = 12
var contador = 0

for(var index = 0; index <= num; index++){
    switch (num % index) {
        case 0:
            contador++
            break;
        default:
            break;
    }
}

switch (contador) {
    case 2:
        console.log("Numero primo")
        break;
    default:
        console.log("Não número primo")
        break;
}

// 1.3.2:

var hora = 5;
var minutos = 0;

hora > 0 ? minutos = hora*60 : minutos = 60;
console.log(minutos)




// 1.4

var array = [12, 6, 9, 42, 11, 102, 44, 15]
var index = 0
var soma = 0

for (index; index < array.length; index++) {
    soma = soma + array[index]
}

console.log(soma)



// 1.4.1
var contador = 0
var primo = false
var num = 0

while (primo === false) {
    for (index = 0; index <= num; index++) {
        if (num % index === 0) {
            contador++
        }
    }
    if (contador === 2) {
        primo = true
    } else {
        contador = 0
        num++
    }
    console.log(num)
}


// 1.4.2:

for (index = 0; index < 100; index++) {
    while ((index < 40 || index > 50) && index < 100) {
        console.log(index)
        index++
    }
}