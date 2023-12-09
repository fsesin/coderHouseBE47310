import { login } from "./login.js";

const totalTests = 5;
let testsPasados = 0;

// 1. Password vacio
const response1 = login("coderUser");
if (response1 === "No se ha proporcionado un password") {
  testsPasados++;
  console.log("Test 1 paso");
} else {
  console.log("Test 1 fallo");
}

// 2. Usuario vacio
const response2 = login(null, "123");
if (response2 === "No se ha proporcionado un usuario") {
  testsPasados++;
  console.log("Test 2 paso");
} else {
  console.log("Test 2 fallo");
}

// 3. Password incorrecto
const response3 = login("coderUser", "1234");
if (response3 === "Contrasena incorrecta") {
  testsPasados++;
  console.log("Test 3 paso");
} else {
  console.log("Test 3 fallo");
}

// 4. Usuario incorrecto
const response4 = login("coderUser1", "123");
if (response4 === "Credenciales incorrectas") {
  testsPasados++;
  console.log("Test 4 paso");
} else {
  console.log("Test 4 fallo");
}

// 5. Usuario y password correctos
const response5 = login("coderUser", "123");
if (response5 === "logueado") {
  testsPasados++;
  console.log("Test 5 paso");
} else {
  console.log("Test 5 fallo");
}

console.log(`Pasaron ${testsPasados} de ${totalTests} test`);
