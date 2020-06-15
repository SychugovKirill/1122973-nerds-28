var link = document.querySelector(".contacts__link");

var popup = document.querySelector(".modal__letter");
var close = popup.querySelector(".modal__close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }

    if (storage) {
        email.value = storage;
        text.focus();
    } else {
        email.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    popup.classList.remove("modal__error");

});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal__error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal__error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal__show")) {
            popup.classList.remove("modal__show");
            popup.classList.remove("modal__error");
        }
    }
});