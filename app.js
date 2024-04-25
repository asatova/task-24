"use strict"
const elements = {
    text: document.getElementById("fname"),
    married: document.getElementById("married"),
    inner: document.getElementById("inner"),
    marriedInner: document.getElementById("married-inner"),
    yoshiInner: document.getElementById("yoshiInner"),
    age: document.getElementById("age"),

};
const submit = document.querySelector("#submit");
const cancel = document.querySelector("#cancel");
const succesfull = document.querySelector("#succesfull");
const unsuccesfull = document.querySelector("#unsuccesfull");

const strings = {
    name: "🕊 name: ",
    ismarried: "💍 is married? ",
    agesinner: "🤓 age: "
};


elements.text.addEventListener("input", wordfocus);
elements.married.addEventListener("input", marriedfocus);
elements.age.addEventListener("input", agefocus);

// Functions
function wordfocus() {
    elements.inner.innerText = strings.name + elements.text.value;
}

function marriedfocus() {
    elements.marriedInner.innerText = strings.ismarried + elements.married.value;
}

function agefocus() {
    elements.yoshiInner.innerText = strings.agesinner + elements.age.value;
}
submit.addEventListener("click", function (){
succesfull.style.display = "block";
succesfull.classList.toggle("yordamchi");
})
cancel.addEventListener("click", function (){
    unsuccesfull.style.display = "block";
    unsuccesfull.classList.toggle("yordamchi");
})
