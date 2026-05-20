function dialogWithUser() {
    const instruments = ["трембіта", "цимбали", "дуда", "флояра"];
    let instrument = "";
    let confirmed = false;

    while (!confirmed) {
        instrument = prompt(
            "Який карпатський музичний інструмент вам найбільше подобається:\nтрембіта, цимбали, дуда чи флояра?"
        );

        if (instrument === null || instrument.trim() === "") {
            alert("Ви не ввели назву інструмента.");
            return;
        }

        instrument = instrument.trim().toLowerCase();

        if (!instruments.includes(instrument)) {
            alert("Такого інструмента немає у списку.");
            continue;
        }

        confirmed = confirm("Ви обрали інструмент: " + instrument + ". Підтвердити вибір?");
    }
    alert("Ваш вибір успішно збережено: " + instrument);
}

function showDeveloperInfo(lastName, firstName, position = "Студентка") {
    alert("Розробник сторінки:\n" + lastName + " " + firstName + "\nПосада: " + position);
}

//порівняння рядків
function compareStrings(firstString, secondString) {
    if (firstString > secondString) {
        alert("Більший рядок: " + firstString);
    } else if (secondString > firstString) {
        alert("Більший рядок: " + secondString);
    } else {
        alert("Рядки однакові.");
    }
}

//зміна фону
function changeBackgroundForThirtySeconds() {
    const originalBg = document.body.style.backgroundColor || "#f9ecf7";
    document.body.style.backgroundColor = "#c8e6f5";

    setTimeout(function () {
        document.body.style.backgroundColor = originalBg;
    }, 30000);
}

function goToGallery() {
    location.href = "gallery.html";
}

//innerHTML, outerHTML, textContent
function useDomProperties() {
    const importantText = document.getElementById("important-title");
    if (!importantText) return;

    importantText.innerHTML = "<b>Цікавий факт:</b> Справжню трембіту роблять лише з громовиці!";

    console.log("outerHTML:", importantText.outerHTML);
    console.log("textContent:", importantText.textContent);
}

//пошук елементів та робота з атрибутами (querySelectorAll)
function useQuerySelectorAll() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function (paragraph, index) {
        paragraph.style.outline = "2px dashed #C080A0";
        paragraph.dataset.number = index + 1;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт успішно завантажено.");

    //перевірка для index.html
    if (document.getElementById("main-headline")) {
        dialogWithUser();
        showDeveloperInfo("Глеба", "Катерина");
        changeBackgroundForThirtySeconds();
    }

    //перевірка для info.html
    if (document.getElementById("important-title")) {
        compareStrings("Трембіта", "Цимбали");

        //ініціалізація кнопки "підкреслити всі абзаци"
        const paragraphBtn = document.getElementById("btn-highlight-paragraphs");
        if (paragraphBtn) {
            paragraphBtn.addEventListener("click", function () {
                useQuerySelectorAll();
            });
        }

        //ініціалізація кнопки "оновити цікавий факт"
        const factBtn = document.getElementById("btn-update-fact");
        if (factBtn) {
            factBtn.addEventListener("click", function () {
                useDomProperties();
            });
        }
    }
});