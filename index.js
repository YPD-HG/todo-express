let inputButton = document.querySelector('#inputButton')

async function postData() {
    let input = document.querySelector("#inputField").value
    if (input !== '') {
        await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ todo: input })
        })
    }
}
async function getData() {
    const url = "http://localhost:3000/";
    try {
        const response = await fetch(url);
        let resp = await (response.json())
        todoFrontend(resp.todos)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        // ...
    } catch (error) {
        console.error("error :", error.message);
    }
}

function todoFrontend(array) {
    let length = array.length
    emptyDiv()
    for (let i = 1; i <= length; i++) {
        if (i % 2 !== 0) {
            createTodo(array[i].todo)
        }
    }
}

function createTodo(data) {
    let todoDiv = document.createElement('div')
    let todoCheck = document.createElement("input");
    todoCheck.setAttribute("type", "checkbox");
    let textContentElement = document.createElement('span')
    textContentElement.textContent = data
    let delBtn = document.createElement('button')
    delBtn.textContent = "Delete"

    todoDiv.appendChild(todoCheck)
    todoDiv.appendChild(textContentElement)
    todoDiv.appendChild(delBtn)
    var inputSpan = document.querySelector("#todo-elements");
    inputSpan.appendChild(todoDiv)
    inputSpan.style.display = "flex"
    inputSpan.style.flexDirection = "column"
    todoDiv.style.display = "grid"
    todoDiv.style.gridTemplateColumns = "150px 150px 150px"
    todoDiv.style.gridAutoFlow = "column"
    todoDiv.style.justifyContent = "center"
    todoDiv.style.margin = "15px"
    textContentElement.style.wordBreak = "break-word"; // bonus for very long strings

    let textData = textContentElement.textContent
    delBtn.addEventListener('click', async () => {
        const res = await fetch("http://localhost:3000/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ textData })
        })
        const data = await res.json();
        todoFrontend(data);
    })
}

function emptyDiv() {
    let ContentDiv = document.querySelector("#todo-elements")
    ContentDiv.innerHTML = ""
}

inputButton.addEventListener('click', async () => {
    await postData();
    await getData();
    document.querySelector("#inputField").value = ""
})


