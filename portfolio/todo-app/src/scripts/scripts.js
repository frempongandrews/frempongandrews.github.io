var add = document.getElementById("add");
var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 22 22" xml:space="preserve"><path class="fill" d="M16.1 3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9 1 7.8 2 7.8 3.3v0.2H5.9c-1.3 0-2.3 1-2.3 2.3v1.3c0 0.5 0.4 0.9 0.9 1v10.5c0 1.3 1 2.3 2.3 2.3h8.5c1.3 0 2.3-1 2.3-2.3V8.2c0.5-0.1 0.9-0.5 0.9-1V5.9C18.4 4.6 17.4 3.6 16.1 3.6zM9.1 3.3c0-0.6 0.5-1.1 1.1-1.1h1.7c0.6 0 1.1 0.5 1.1 1.1v0.2H9.1V3.3zM16.3 18.7c0 0.6-0.5 1.1-1.1 1.1H6.7c-0.6 0-1.1-0.5-1.1-1.1V8.2h10.6L16.3 18.7 16.3 18.7zM17.2 7H4.8V5.9c0-0.6 0.5-1.1 1.1-1.1h10.2c0.6 0 1.1 0.5 1.1 1.1V7z"/><path class="fill" d="M11 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6s0.6 0.3 0.6 0.6v6.8C11.6 17.7 11.4 18 11 18z"/><path class="fill" d="M8 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8C7.4 10.2 7.7 10 8 10c0.4 0 0.6 0.3 0.6 0.6v6.8C8.7 17.7 8.4 18 8 18z"/><path class="fill" d="M14 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6v6.8C14.6 17.7 14.3 18 14 18z"/></svg>';
var completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 22 22" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><path class="fill" d="M9.7 14.4L9.7 14.4c-0.2 0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8 0-1.1s0.8-0.3 1.1 0l2.1 2.1 4.8-4.8c0.3-0.3 0.8-0.3 1.1 0s0.3 0.8 0 1.1l-5.3 5.3C10.1 14.3 9.9 14.4 9.7 14.4z"/></svg>';

document.getElementById("add").addEventListener("click", function () {
    var value = document.getElementById("item").value;
    if (value) {
        addItemTodo(value);
        document.getElementById("item").value = "";
    }
});

//removing items
function removeItem () {
    var item = this.parentNode;
    var parent = item.parentNode;
    item.classList.remove("newItem");
    item.classList.add("removingItem");
    console.log(item);
    //for transition
    //removeChild does not allow transition so
    //let it run slightly later
    setTimeout(function () {
        parent.removeChild(item);
    }, 550);

    //console.log(this.parentNode.parentNode);
}



function completeItem () {
    var item = this.parentNode;
    //console.log(item);
    var parent = item.parentNode;
    console.log(parent.className);
    var completedList = document.getElementById("completed-list");
    var todoList = document.querySelector(".todo");

    var parentClassname = parent.className;

    if(parentClassname === "todo") {

        //it's a todo item to be completed
        item.classList.add("completed");
        parent.removeChild(item);

        //for transition
        item.classList.add("newItem");

        completedList.insertBefore(item, completedList.childNodes[0]);


    } else {
        //it is a completed item
        item.classList.remove("completed");
        parent.removeChild(item);

        //for transition
        item.classList.add("newItem");
        todoList.insertBefore(item, todoList.childNodes[0])


    }

}


function addItemTodo(text) {
    var list = document.querySelector(".todo");
    var listItem = document.createElement("li");
    listItem.classList.add("list-item-container");
    var listPara = document.createElement("p");
    listPara.innerText = text;


    listItem.appendChild(listPara);

    var remove = document.createElement("div");
    remove.innerHTML = removeSVG;
    remove.classList.add("remove-icon");

    var complete = document.createElement("div");
    complete.innerHTML = completeSVG;
    complete.classList.add("complete");

    listItem.appendChild(remove);
    listItem.appendChild(complete);

    // for transition
    listItem.classList.add("newItem");


    list.insertBefore(listItem, list.childNodes[0]);

    //removing items

    remove.addEventListener("click", removeItem, false);
    complete.addEventListener("click", completeItem, false);

}