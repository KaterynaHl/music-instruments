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