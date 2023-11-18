const testButton = document.getElementById("test_button");

testButton.onclick = () => {
  fetch("http://localhost:8080/home")
    .then((v) => v.json())
    .then((v) => console.log(v));
};
