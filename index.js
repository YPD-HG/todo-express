let inputButton = document.querySelector('#inputButton')

function getData() {
    let input = document.querySelector("#inputField").value
    fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ todos: input })
    })
}

function createTodo() {
    let input = document.querySelector("#inputField").value
    let todoDiv = document.createElement('div')
    let todoCheck = document.createElement("input");
    todoCheck.setAttribute("type", "checkbox");
    let textContentElement = document.createElement('span')
    textContentElement.textContent = input
    let delBtn = document.createElement('button')
    delBtn.textContent = "Delete"

    todoDiv.appendChild(todoCheck)
    todoDiv.appendChild(textContentElement)
    todoDiv.appendChild(delBtn)
    console.log("todoDiv :", todoDiv)
    var inputSpan = document.querySelector("#todo-element");
    inputSpan.appendChild(todoDiv)
    inputSpan.style.display = "flex"
    inputSpan.style.flexDirection = "column"
    todoDiv.style.display = "grid"
    todoDiv.style.gridTemplateColumns = "150px 150px 150px"
    todoDiv.style.gridAutoFlow = "column"
    todoDiv.style.justifyContent = "center"
    todoDiv.style.margin = "15px"
    textContentElement.style.wordBreak = "break-word"; // bonus for very long strings
}

inputButton.addEventListener('click', () => {
    getData();
    createTodo()
    document.querySelector("#inputField").value = ""
})