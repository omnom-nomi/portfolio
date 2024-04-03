(function () {
    const webchat = document.querySelector(".webchat");
    const socket = io();

    let uname;

    webchat.querySelector(".join-screen #join-user").addEventListener("click", function () {
        let username = webchat.querySelector(".join-screen #username").value;
        if (username.length == 0) {
            return;
        }

        socket.emit("newUser", username);
        uname = username;
        webchat.querySelector(".join-screen").classList.remove("active");
        webchat.querySelector(".chat-screen").classList.add("active");
    });

    webchat.querySelector(".chat-screen #send-message").addEventListener("click", function () {
        let message = webchat.querySelector(".chat-screen #message-input").value;
        if (message.length == 0) {
            return;
        }

        renderMessage("my", {
            username: uname,
            text: message
        });

        socket.emit("chat", {
            username: uname,
            text: message
        });
        webchat.querySelector(".chat-screen #message-input").value = "";
    });

    webchat.querySelector(".chat-screen #exit-chat").addEventListener("click", function () {
        socket.emit("exitUser", uname);
        window.location.href = window.location.href;
    })

    socket.on("update", function (update) {
        renderMessage("update", update);
    });

    socket.on("chat", function (message) {
        renderMessage("other", message);
    });

    function renderMessage(type, message) {
        let messageContainer = webchat.querySelector(".chat-screen .messages");
        if (type == "my") {
            let x = document.createElement("div");
            x.setAttribute("class", "message my-message");
            x.innerHTML = `<div><div class="name">You<div class="text">${message.text}</div> </div> </div>`;
            messageContainer.appendChild(x);
        } else if (type == "other") {
            let x = document.createElement("div");
            x.setAttribute("class", "message other-message");
            x.innerHTML = `<div><div class="name">${message.username}<div class="text">${message.text}</div> </div> </div>`;
            messageContainer.appendChild(x);
        } else if (type == "update") {
            let x = document.createElement("div");
            x.setAttribute("class", "update");
            x.innerHTML = message;
            messageContainer.appendChild(x);
        }
        //scroll chat to the end
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
})();