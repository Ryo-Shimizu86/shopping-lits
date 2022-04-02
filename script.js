const inputItem = document.querySelector("#input-item");
const enterBtn = document.querySelector("#enter");
const ul = document.querySelector("ul");

function inputLength() {
    return inputItem.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputItem.value));
    li.appendChild(createDeleteElement());
    ul.appendChild(li);
    inputItem.value = "";
    li.addEventListener("click", function() {
        toggleLineThrough(li);
    });
}

function createDeleteElement() {
    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("delete"));
    deleteBtn.classList.add("delete_btn");
    deleteBtn.addEventListener("click", function() {
        deleteListItem(deleteBtn);
    });
    return deleteBtn;
}

function addListAfterClick(event) {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

function toggleLineThrough(li) {
    li.classList.toggle("done");
}

function deleteListItem(deleteBtn) {
    deleteBtn.parentElement.remove();
}

enterBtn.addEventListener("click", addListAfterClick);
inputItem.addEventListener("keypress", addListAfterKeypress);



