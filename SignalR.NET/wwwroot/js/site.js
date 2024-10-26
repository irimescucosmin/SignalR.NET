const connection = new signalR.HubConnectionBuilder()
    .withUrl("/notify")
    .withAutomaticReconnect()
    .build();

connection.on("Notify", (message) => {
    showNotification(message);
    console.log(message);
});

function showNotification(message) {
    const toast = document.createElement("div");
    toast.className = "notification-toast";
    toast.textContent = message;
    document.getElementById("notification-container").appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
}

async function startConnection() {
    try {
        await connection.start();
        console.log("Connesso a SignalR!");
    } catch (err) {
        console.error(err);
        setTimeout(startConnection, 5000);
    }
}

startConnection().then();