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
    if (req.body !== '') {
        todos.push(
            id,
            req.body
        )
    }
    res.send('Hello World!');
})

app.delete('/', (req, res) => {
    if (req.body !== '') {
        const data = req.body.textData
        console.log(data)
        const index = todos.findIndex((item) =>
            item.todo === data);
        console.log(index);
        if (index !== -1) {
            todos.splice(index, 1);
            todos.splice(index-1, 1);
        }
        console.log("***todos***", todos)
        res.send(todos);
    }
})

app.get('/', (req, res) => {
    res.json({
        todos
    })
})

app.delete('/', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



