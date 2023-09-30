const socketClient = io();
const form = document.getElementById("form");
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");
const inputPrice = document.getElementById("price");
const table = document.getElementById("table");
const tableBody = document.getElementById("tableBody");
form.onsubmit = (e) => {
  e.preventDefault();
  const product = {
    title: inputTitle.value,
    description: inputDescription.value,
    price: inputPrice.value,
  };
  socketClient.emit("createProduct", product);
};

socketClient.on("productCreated", (product) => {
  const { id, title, description, price } = product;
  const row = `
    <tr>
    <td>${id}</td>
            <td>${title}</td>
            <td>${description}</td>
            <td>${price}</td>
        </tr>`;
  table.innerHTML += row;
});
