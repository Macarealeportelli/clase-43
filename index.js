//While
// Estructura de repetición que se ejecuta siempre y cuando se cumpla la condicion

// let numero = 0
// while(numero<10){
//     console.log(numero)
//     numero++
// }

// mostramos la tabla del 9 hasta 9*10

// let numero = 9
// while(numero<=90){
//     console.log(numero)
//     numero += 9
// }

// Ejercicio mostrar arbolito en consola

// let asterisco = '*'
// while (asterisco.length <= 10){
//     console.log(asterisco)
//     asterisco += '*'
// }


//EJERCICIOS OBLIGATORIOS

// obtenerIndice(valor, array)
// Crear una función obtenerIndice que tome como argumento un valor cualquiera 
// valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor 
// en el array, o -1 si no hay ninguno.

// obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
// obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1


const obtenerIndice = (valor, array)=>{
    for (let i = 0; i < array.length; i++) {
       if (valor === array[i]){
            return [i]
       }
           
    }
    return '-1'
}

console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])) // 2
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])) // -1


// repetir(valor, cantidad)
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad,
//  y devuelva una array con valor repetido cantidad de veces.

// repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
// repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
// repetir('html', 0) // []

const repetir=(valor,cantidad)=>{
    
}






// sumarImparesHasta(numero)
// Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva
//  la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

// sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
// sumarImparesHasta(13) // 49
// sumarImparesHasta(47) // 576
// crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial
//  y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros 
// sucesivos descendientes, hasta llegar a 0.

// crearCuentaRegresiva(3) // [3, 2, 1, 0]
// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]

// 🏃‍♀️ Carrera
// Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario 
// la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. 
// Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo 
// de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:

// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45s

// let continuarPrograma = true
// while (continuarPrograma){
//     let respuestaUsuario = prompt ('Diga cuanto duró la vuelta')
//     let confirmar = confirm ('Hay alguna vuelta pendiente?')
//      console.log(respuestaUsuario)
//     if (confirmar === false){
//         continuarPrograma === false
//     }
// }





// 🔐 Múltiples intentos
// Crear un programa que pida ingresar usuario y contraseña. 
// El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos.
// Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. 
// Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. 
// El usuario y la contraseña ya deben estar guardadas en variables.