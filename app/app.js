import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
let todos = [];
// ✅ Body parser middleware
app.use(express.json()); // parses JSON request body
app.use(cors());

app.post('/', (req, res) => {
    let id = Math.floor(Math.random() * 101);

    todos.push(
        id,
        req.body
    )
    console.log("**********")
    console.log("todos :", todos)
    // we get the input, because express = Node.js = js for backend
    console.log(JSON.stringify(req.body));
    res.send('Hello World!');
})

app.delete('/', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



