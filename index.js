let inputButton = document.querySelector('#inputButton')

function getData() {
    let input = document.querySelector("#inputField").value
    fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userInput: input })
    })
}

inputButton.addEventListener('click', () => {
    getData();
})