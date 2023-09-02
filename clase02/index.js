// ES7

// const exp = Math.pow(4,3)
// const expES7 = 4 ** 3
// console.log(exp, expES7);

// const array = [1,2,3,4,5,6,7,8,9]
// const isIncluded = array.includes(2)
// console.log(isIncluded);

//ES8

const obj = {
    first_name: 'Juan',
    last_name: 'Hoyos',
    age: 25,
    isSingle: true
}

//console.log(Object.keys(obj))
//console.log(Object.values(obj));
//console.log(Object.entries(obj));

const objArray = Object.entries(obj)
const objArrayMod = objArray.map(([k,v])=>[k,`${v} mod`])
//console.log(objArrayMod);
const objMod = Object.fromEntries(objArrayMod)
//console.log(objMod);

//ES9

const animals1 = ['perro','gato','raton','pajaro','jirafa']
const animals2 = ['elefante','tigre','leon','cocodrilo']

const obj2 = {
    prop1: 'Name',
    prop2: 'Name2'
}

//const animals = animals1.concat(animals2)
const animals = [...animals1,...animals2]
const objs = {...obj,...obj2}

//console.log(objs);

const animalsCopy = [...animals]
animalsCopy[0] = 'mico'
//console.log(animalsCopy);
//console.log(animals);

const newobj = {...obj,id:1,course:'JS',isSingle:false}
//console.log(newobj);


//REST

// const function1 = (a,b,...otros)=>{
//     console.log(a,b);
//     console.log(otros);
// }

// function1(1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9)

const {first_name,last_name,...otros} = newobj

//console.log(otros);

// ES10

const text = '     How old are you    '
//console.log(text.length);
//console.log(text.trim().length);

const array = [1,2,3,4,[5,6,[7,8,[9,0]]]]
//console.log(array.flat(Infinity));

// ES11
const number = undefined
//console.log(number || 10);
//console.log(number ?? 10);

// HANDS ON LAB

class TicketManager {
    #precioBaseDeGanacia = 2 

    constructor(){
        this.eventos = []
    }

    agregarEvento(nombre,lugar,precio,capacidad=50,fecha= new Date()){
        
        // let id 
        // if(this.eventos.length){
        //     id = this.eventos[this.eventos.length-1].id+1
        // } else {
        //     id = 1
        // }
        const evento = {
            id: this.#generarIdEvento(),
            nombre,
            lugar,
            precio: precio + this.#precioBaseDeGanacia,
            capacidad,
            fecha,
            participantes: []
        }
        this.eventos.push(evento)

    }

    agregarUsuario(idEvento,idUsuario){
        const evento = this.#buscarEvento(idEvento)
        if(!evento){
            return 'Este evento no existe'
        }
        if(evento.participantes.includes(idUsuario)){
            return 'Usuario ya registrado en el evento'
        }
        evento.participantes.push(idUsuario)
    }

    ponerEventoEnGira(idEvento,nuevoLugar,nuevaFecha){
        const evento = this.#buscarEvento(idEvento)
        if(!evento){
            return 'Este evento no existe'
        }
        const nuevoEvento = {
            ...evento,
            lugar:nuevoLugar,
            fecha:nuevaFecha,
            participantes:[],
            id: this.#generarIdEvento()
        }
        this.eventos.push(nuevoEvento)
    }

    #buscarEvento(idEvento){
        return this.eventos.find(e=>e.id === idEvento)
    }

    #generarIdEvento(){
        return this.eventos.length 
        ? this.eventos[this.eventos.length-1].id+1 
        : 1
    }


}


// ASYNC 

// console.log('Primer log');


// setTimeout(() => {
//     console.log('Log timeOut');
// }, 0);

// console.log('Ultimo log');


// const array = []

// array.map(e=>e.id)


// const sumar = ()=>{}
// const restar = ()=>{}
// const mult = ()=>{}
// const div = ()=>{}


// function calculadora(num1,num2,oper){

// }

// calculadora(1,2,sumar)


// LLAMADO A BD
// TABLA USUARIOS - FAMILIARES
// function agregarFamiliar(idUsuario,infoFamiliar){
//     usuarios.findById(idUsuario,function(error,usuario){
//         if(error){
//             return error
//         } else {
//             familiares.findAllByLastName(usuario.lastName,function(error,familiares){
//                 if(error){
//                     return error
//                 } else {
//                     if(familiares.includes(infoFamiliar)){
//                         return 'Familiar ya existe'
//                     } else {
//                         familiares.createOne(infoFamiliar,function(error){
//                             if(error){
//                                 return error
//                             } else {
//                                 return 'Familiar agregado con exito'
//                             }
//                         })
//                     }
//                 }
//             })
//         }
//     })
// }

// // CREAR UNA FUNC PROMESA

// function promesaFun(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a===0 || b===0){
//             reject('Promesa rechazada porque algun parametro es igual a 0')
//         } else {
//             resolve(a+b)
//         }
//     })
// }

// promesaFun(0,7)
// .then(res=>console.log(res))
// .catch(error=>console.log(error))


// function agregarFamiliarProm(idUsuario,infoFamiliar){
//     ususarios.findById(idUsuario)
//     .then(usuario=>{
//         return familiares.findAllByLastName(usuario.lastName)
//     })
//     .then(familiares=>{
//         if(familiares.includes(infoFamiliar)){
//             return 'Familiar ya existe'
//         } else {
//             return familiares.createOne(infoFamiliar)
//         }
//     })
//     .then(()=>'Familiar agregado con exito')

//     .catch(error=>error)


//    //htrggrgrg
// }


// async function agregarFamiliarAsync(idUsuario,infoFamiliar){

// try {
//     const usuario = await  usuarios.findById(idUsuario)
//     const familiares = await familiares.findAllByLastName(usuario.lastName)
//     console.log('Hola a todos');
//     if(familiares.includes(infoFamiliar)){
//         return 'Familiar ya existe'
//     }
//     return familiares.createOne(infoFamiliar)
     
// } catch (error) {
//     return error
// }
// }


