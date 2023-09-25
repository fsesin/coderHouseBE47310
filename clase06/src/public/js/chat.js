const socketClient = io();

const form = document.getElementById("chatForm");
const inputMessage = document.getElementById("chatMessage");
const h3Name = document.getElementById("name");
const divChat = document.getElementById("chat");

let user;

Swal.fire({
  title: "Welcome",
  text: "What is your name",
  input: "text",
  inputValidator: (value) => {
    if (!value) {
      return "Name is required";
    }
  },
  confirmButtonText: "Enter",
}).then((input) => {
  user = input.value;
  h3Name.innerText = `Chat user: ${user}`;
  socketClient.emit("newUser", user);
});

socketClient.on("newUserBroadcast", (user) => {
  Toastify({
    text: `${user} connected`,
    duration: 5000,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});

form.onsubmit = (e) => {
  e.preventDefault();
  const infoMessage = {
    name: user,
    message: inputMessage.value,
  };
  socketClient.emit("message", infoMessage);
};

socketClient.on("chat", (messages) => {
  const chat = messages
    .map((objMessage) => `<p>${objMessage.name}: ${objMessage.message}</p>`)
    .join(" ");
  divChat.innerHTML = chat;
});

//`<p>${objMessage.name}: ${objMessage.message}</p> <p>${objMessage.name}: ${objMessage.message}</p> <p>${objMessage.name}: ${objMessage.message}</p>`
