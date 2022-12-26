updateNumber();
document.getElementById("mark-all-as-read-button").addEventListener("click", markAllAsRead);

function markAllAsRead(){
    let notifs = document.querySelectorAll("article");

    notifs.forEach((notif) => {
        notif.classList.remove("unread");
    });

    updateNumber();
}

function updateNumber(){
    let notifs = document.querySelectorAll(".unread");
    document.getElementById("notif-qty").innerHTML = notifs.length;
}
