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


// const obtenerIndice = (valor, array)=>{
//     for (let i = 0; i < array.length; i++) {
//        if (valor === array[i]){
//             return [i]
//        }

//     }
//     return '-1'
// }

// console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])) // 2
// console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])) // -1


// repetir(valor, cantidad)
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad,
//  y devuelva una array con valor repetido cantidad de veces.

// repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
// repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
// repetir('html', 0) // []


// const repetir=(valor,cantidad)=>{
//      let array = []
//     for (let i = 0; i < cantidad; i++) {
//         array.push(valor)

//     }
//     return array
// }

// console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
// console.log(repetir('a', 5)) // ['a', 'a', 'a', 'a', 'a']
// console.log(repetir('html', 0)) // []


// sumarImparesHasta(numero)
// Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva
//  la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

// sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
// sumarImparesHasta(13) // 49
// sumarImparesHasta(47) // 576

// let suma=0
// const sumarImparesHasta = (numero)=>{
//     for (let i = 0; i <= numero; i++) {
//         console.log(i)
//          suma = i + [i+1]

//     }
//      return suma
// }

// console.log(sumarImparesHasta(5)) // 9 (1 + 3 + 5 = 9)
// console.log(sumarImparesHasta(13)) // 49
// console.log(sumarImparesHasta(47)) // 576






// crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial
//  y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros 
// sucesivos descendientes, hasta llegar a 0.

// crearCuentaRegresiva(3) // [3, 2, 1, 0]
// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]


// const crearCuentaRegresiva=(numero)=>{
//     let array = []
//     for (let i = numero; i>= 0; i--) {
//        array.push(i)
//     }
//     return array
// }

// console.log(crearCuentaRegresiva(3)) // [3, 2, 1, 0]
// console.log(crearCuentaRegresiva(5)) // [5, 4, 3, 2, 1, 0]


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

// const cantidadDeVueltas = prompt('Ingrese cantidad de vueltas')
// console.log(`Cantidad de vueltas: ${cantidadDeVueltas}`)

// const controlarVueltasCarrera = () => {
//     let tiempoVuelta = 0
//     let sumaDeVueltas = 0
//     let promedio = 0

//     for (let i = 1; i <= cantidadDeVueltas; i++) {

//         tiempoVuelta = Number(prompt('que tiempo duró la vuelta?'))
//         console.log(`Vuelta ${i} : ${tiempoVuelta}s`)
//         sumaDeVueltas += tiempoVuelta
//     }
//     promedio = sumaDeVueltas / cantidadDeVueltas
//     return `Promedio: ${promedio}s `
// }

// console.log(controlarVueltasCarrera())



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

// const usuarioCorrecto = 'pepo'
// const contraseñaCorrecta = '1234'

// const multiplesIntentos = () => {
//     let contadora = 1

//     while (contadora <= 3) {
//         let usuario = prompt(`Ingrese su usuario. intento ${contadora} de 3`)
//         let contraseña = prompt('Ingrese su contraseña')
//         contadora++
//         if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
//             return alert('Bienvenido')

//         }

//     }
//     return alert('Ud. inteno 3 veces. Dirijase a la sucursal mas cercana para restablecer su usario y contraseña')

// }

// console.log(multiplesIntentos())


// Mostrar en consola los nombres empezando por el ultimo y terminando en el primero.


// const array = ['rebe' , 'sol' , 'maca' , 'pepo' , 'pepa']

// const devolverAlReves = (array)=>{

//     for (let i = array.length -1 ; i >= 0; i--) {
        
//         console.log(array[i])
        
//     }

// }

// devolverAlReves(array)






// ⚖️ Mayor o menor
// Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario 
// que intente adivinar el número. Por cada intento, debe avisar si el número a 
// adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.



