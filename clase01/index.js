// let name = 'Juan';
// let number = 5;
// let bool = true;
// let obj = {
//     prop1: 5,
//     prop2: 'coder'
// };
// let array = ['a','b',5,true]

// number = 10;

// console.log(number);

// actividad

// let name = 'Juan';
// let age = 20;
// let price = 500;
// let series = ['Breaking bad','GOT']

// console.log(name,age,price,series);

// age = age+1;
// series.push('The walking dead')

// console.log(name,age,price,series);

// let objUser = {
//     name: 'Juan',
//     age: 20,
//     price: 500,
//     series: ['Breaking bad','GOT']
// }
// console.log(objUser);

// VAR - LET - CONST

// var var1 = 10
// let var2 = 5

// {
// console.log(var1,var2)
// var var3 = 8
// let var4 = 15
// }
// console.log(var3)
// console.log(var4)

// let first_name = 'Carlos'

// first_name = 'Andres'

// console.log(first_name);

// const elem1 = 'elem1'
// const array = [elem1]

// array.push('elem2')
// array[0] = 'elemNuevo'
// console.log(array);

// const fee = 0.20

// funciones

// function sum(num1,num2){
// const result = num1+num2
// return result
// }

const sum = (num1, num2) => num1 + num2

const result = sum(5, 10)
//console.log(10+result);

// const array = [1,2,3,4,5,6,7,8,9]

// const num = array.f()

// if(result>10){
// const saludo = 'hola'
// console.log(saludo);
// }
// console.log(saludo);

//console.log('El resultado de la suma es: '+result+'. Gracias por participar');
//console.log(`El resultado de la suma es: ${result}. Gracias por participar`);

// HANDS ON LAB

// const mostrarLista = (arreglo) => {
//   if (Array.isArray(arreglo)) {
//     if (!arreglo.length) {
//       return 'Lista vacia'
//     }
//     arreglo.forEach((e) => console.log(e))
//     return `La longitud de la lista es: ${arreglo.length}`
//   } else {
//     return 'No es un arreglo'
//   }
// }

// console.log(mostrarLista([]))

// // clases

// class User {
//   constructor(first_name, last_name, email) {
//     this.first_name = first_name
//     this.last_name = last_name
//     this.email = email
//   }

//   getFirstName() {
//     return this.first_name
//   }
// }

// const user1 = new User('Carlos', 'Abello', 'cabello@mail.com')
// const user2 = new User('Juan', 'Villadiego', 'jvilladiego@mail.com')

// user2.console.log(user1.getFirstName())

// hands on lab

class Contador {
  constructor(nombre) {
    this.nombre = nombre
    this.contadorIndividual = 0
  }
  static contadorGlobal = 0

  getResponsable() {
    console.log(this.nombre)
  }

  contar() {
    this.contadorIndividual++
    Contador.contadorGlobal++
  }

  getCuentaIndividual() {
    console.log(
      `Cuenta individual de ${this.nombre} es ${this.contadorIndividual}`
    )
  }

  getCuentaGlobal() {
    console.log(`Cuenta global es ${Contador.contadorGlobal}`)
  }
}

const contador1 = new Contador('Contador 1')
const contador2 = new Contador('Contador 2')

contador1.getResponsable()
contador2.getResponsable()
contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()
contador2.contar()
contador1.getCuentaIndividual()
contador2.getCuentaIndividual()
contador1.getCuentaGlobal()
contador2.getCuentaGlobal()