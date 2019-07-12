const socket = io("localhost:8801");

const button = document.getElementById("button");
const textarea = document.getElementById("textarea");
const messages = document.getElementById("messages");

button.addEventListener("click", () => {
    const textarea = document.getElementById("textarea");
    let text = textarea.value;
    socket.emit("message", {text});
});

socket.on("message", obj => {
    let node = document.createElement("div");
    node.className = "message";
    let nodeText = document.createTextNode(obj.text);
    node.appendChild(nodeText);
    messages.appendChild(node);
    messages.scrollTop = messages.scrollHeight;
    const textarea = document.getElementById("textarea");
    textarea.value = "";
})
