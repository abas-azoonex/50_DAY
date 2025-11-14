var buttonSave = document.getElementById("save_local_storage");
var buttonRemove = document.getElementById("remove_local_storage");
var demo = document.getElementById("demo");
console.log(buttonSave);
function saveLocalStorage() {
    localStorage.setItem("myCat", "Tom");
}
function remove_local_storage() {
    localStorage.clear();
}
buttonSave === null || buttonSave === void 0 ? void 0 : buttonSave.addEventListener("click", saveLocalStorage);
buttonRemove === null || buttonRemove === void 0 ? void 0 : buttonRemove.addEventListener("click", remove_local_storage);
(function checkDom() {
    var getMyCat = localStorage.getItem("myCat");
    if (getMyCat) {
        demo === null || demo === void 0 ? void 0 : demo.innerHTML = "<>".concat(getMyCat, "<>");
    }
})();
