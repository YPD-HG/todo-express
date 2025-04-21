import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 3000;

let todos = [];

app.use(express.json()); // parses JSON request body
app.use(cors());

// app.post('/', (req, res) => {
//     let id = Math.floor(Math.random() * 101);
//     if (req.body !== '') {
//         // todos.push(
//         //     id,
//         //     req.body
//         // )
//         console.log("Here***********")
//     }
//     res.send('Hello World!');
// })

app.post('/', async (req, res) => {
    if (req.body !== '') {
        // *** req.body *** : { todo: 'IDC Website' }
        let data = req.body
        // its in js obj, we will convert that into
        // string and put in file
        console.log(" *** data *** :", data)

        let file_content = fs.readFileSync('../data/todo.json', 'utf-8')

        if (file_content.trim()) {
            todos = JSON.parse(file_content);
            // Convert string to array
            console.log("todos (string to array) :", todos)
        }
        todos.push(data)
        console.log("*** todos *** :", todos)

        let str = JSON.stringify(todos)
        console.log(" *** str *** :", str)

        // something is wrong with writeFile
        fs.writeFile('../data/todo.json', str, (err) => {
            if (err) throw err;
            console.log('Data written');
        });
    }
    res.send(todos)
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



