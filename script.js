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

function goToGallery() {
    location.href = "gallery.html";
}
const importantText = document.getElementById("important-title");

if (importantText) {
    importantText.innerHTML = "<b>Оновлений цікавий факт про трембіту!</b>";

    console.log(importantText.outerHTML);
    console.log(importantText.textContent);
    console.log(importantText.firstChild.data);
} 
    else {
    console.error("Element with id 'important-title not found.");
}

const note =
document.getElementById("important-title");

if (note) {
    note.after(" Додатковий текст після елемента.");
}

let newParagraph = document.createElement("p");

let text = document.createTextNode("Новий абзац через JavaScript");

newParagraph.append(text);

document.body.append(newParagraph);

document.body.append("Додатковий текст");

document.body.prepend("Java Script активний");
