// діалог з користувачем при вході на сайт
function userDialog() {

    let instrument = prompt("Який музичний інструмент вам подобається?");

    if (instrument === null || instrument === "") {
        alert("Ви нічого не ввели!");
    } else {
        alert("Ваш улюблений інструмент: " + instrument);
    }

    for (let i = 1; i <= 3; i++) {
        console.log("Цикл працює: " + i);
    }
}

userDialog();

function developerInfo(lastName, firstName, position = "Студент") {

    alert(
        "Розробник: " +
        lastName +
        " " +
        firstName +
        "\nПосада: " +
        position
    );
}

developerInfo("Глеба", "Катерина");

// зміна фону
document.body.style.backgroundColor = "#d8e8ff";

setTimeout(function () {
    document.body.style.backgroundColor = "#f9ecf7";
}, 30000);

