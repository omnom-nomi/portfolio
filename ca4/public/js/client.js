(function (){
    const webchat = document.querySelector(".webchat");
    const socket = io(); // Make sure you have initialized socket.io correctly

    let uname;

    webchat.querySelector(".join-screen #join-user").addEventListener("click", function (){
        let username = webchat.querySelector(".join-screen #username").value;
        if(username.length == 0){
            return;
        }

        socket.emit("newUser", username);
        uname = username;
        webchat.querySelector(".join-screen").classList.remove("active");
        webchat.querySelector(".chat-screen").classList.add("active");
    });
})();
