let inputButton = document.querySelector('#inputButton')
let inputField = document.querySelector('#inputField')

async function postData() {
    let input = inputField.value
    if (input !== '') {
        console.log("**input** :", input)
        await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ todo: input })
        })
    }
}

inputButton.addEventListener('click', async () => {
    await postData();
    // await getData();
    // createTodo()
    document.querySelector("#inputField").value = ""
})


