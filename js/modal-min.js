var link=document.querySelector(".contacts__link"),popup=document.querySelector(".modal__letter"),close=popup.querySelector(".modal__close"),form=popup.querySelector("form"),login=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),text=popup.querySelector("[name=text]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}try{storage=localStorage.getItem("email")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal__show"),storage?(login.value=storage,email.focus()):login.focus(),storage?(email.value=storage,text.focus()):email.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal__show"),popup.classList.remove("modal__error")}),form.addEventListener("submit",function(e){login.value&&email.value?isStorageSupport&&(localStorage.setItem("login",login.value),localStorage.setItem("email",email.value)):(e.preventDefault(),popup.classList.remove("modal__error"),popup.offsetWidth,popup.classList.add("modal__error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal__show")&&(popup.classList.remove("modal__show"),popup.classList.remove("modal__error")))});
