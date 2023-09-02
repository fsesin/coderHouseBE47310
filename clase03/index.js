
// setTimeout(() => {
    
// }, 0);

// setInterval(() => {
    
// }, interval);

// FS

const fs = require('fs')
//import fs from 'fs'

// escribir un archivo
//fs.writeFileSync('archivo.txt','primer archivo')

// leer un archivo
//const infoArchivo = fs.readFileSync('archivo.txt','utf-8')
//console.log(infoArchivo);

// eliminar un archivo
//fs.unlinkSync('archivo.txt')

// existe un archivo
//const existeArchivo = fs.existsSync('archivo.txt')
//console.log(existeArchivo);

// anadir informacion
//fs.appendFileSync('archivo.txt','segundo parrafo')

// asincrona

// CALLBACKS 

//escribir un archivo
// fs.writeFile('archivoAsync.txt','primer archivo',(error)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo creado con exito');
//     }
// })

//leer un archivo
// fs.readFile('archivoAsync.txt','utf-8',(error,info)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log(info);
//     }
// })

// eliminar un archivo
// fs.unlink('archivo.txt',(error)=>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Archivo eliminado con exito');
//     }
// })

//Promesas
// fs.promises.writeFile('/src/archivoAsync.txt','primer archivo')
// .then(()=>console.log('Archivo creado con exito'))
// .catch(error=>console.log(error))
// fs.promises.readFile('archivoAsync.txt','utf-8')
// .then((info)=>console.log(info))
// .catch(error=>console.log(error))
// fs.promises.unlink('archivoAsync.txt')
// .then(()=>console.log('Archivo eliminado con exito'))
// .catch(error=>console.log(error))

const products = [
    {
        name: 'Iphone',
        price: 500,
        stcok: 25
    },
    {
        name: 'Ipad',
        price: 200,
        stcok: 35
    },
    {
        name: 'TV',
        price: 1500,
        stcok: 15
    },
    {
        name: 'Galaxy',
        price: 400,
        stcok: 4
    }
]

// fs.promises.writeFile('products.json',JSON.stringify(products))
// .then(()=>console.log('Archivo creado con exito'))
// .catch(error=>console.log(error))

fs.promises.readFile('products.json','utf-8')
.then(info=>console.log(JSON.parse(info)))
.catch(error=>console.log(error))
