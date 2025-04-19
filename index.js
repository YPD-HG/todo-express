let inputButton = document.querySelector('#inputButton')

function postData() {
    let input = document.querySelector("#inputField").value
    if (input !== '') {
        fetch("http://localhost:3000/", {
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
        emptyDiv()
        console.log("*** resp data *** :", resp.todos)
        for (let i = 1; i <= resp.todos.length; i++) {
            if (i % 2 !== 0) {
                console.log("*****i***** :", i)
                createTodo(resp.todos[i].todo)
            }
        }
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        // ...
    } catch (error) {
        console.error(error.message);
    }
}

// function getData() {
//     // let input = document.querySelector("#inputField").value
//     console.log("********")
//     fetch("http://localhost:3000/")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // logs { todos: [...] }
//         })
//         .catch(error => console.log('Error:', error));
// }

function emptyDiv() {
    let ContentDiv = document.querySelector("#todo-elements")
    ContentDiv.innerHTML = ""
}

inputButton.addEventListener('click', () => {
    postData();
    getData();
    // createTodo()
    document.querySelector("#inputField").value = ""
})

getData();


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
}