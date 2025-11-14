
const buttonSave = document.getElementById("save_local_storage")
const buttonRemove = document.getElementById("remove_local_storage");


const demo = document.getElementById("demo");
console.log(buttonSave)

function saveLocalStorage (){
    localStorage.setItem("myCat","Tom")
}

function remove_local_storage(){
    localStorage.clear()
}


buttonSave?.addEventListener("click",saveLocalStorage)
buttonRemove?.addEventListener("click",remove_local_storage);


(function checkDom(){
    const getMyCat = localStorage.getItem("myCat");
    if(getMyCat){
    demo?.innerHTML = `<>${getMyCat}<>`
    }
    
})()
