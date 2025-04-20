import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 3000;

let todos = [];

app.use(express.json()); // parses JSON request body
app.use(cors());
app.post('/', async (req, res) => {
    // *** req.body *** : { todo: 'IDC Website' }
    let data = req.body
    // its in js obj, we will convert that into
    // string and put in file
    console.log(" *** data *** :", data)

    let file_content = fs.readFileSync('todo.json', 'utf-8')

    if (file_content.trim()) {
        todos = JSON.parse(file_content); // Convert string to array
        console.log("todos (string to array) :", todos)
    }
    todos.push(data)
    console.log("*** todos *** :", todos)

    // Till here we checked if the file was empty, if it had content inside it, if it had then we parse the data and put that into the todos array, then we inserted or pushed the data we recieved as payload into the array.

    // Now we will stringyfy the content and put that into the file
    let str = JSON.stringify(todos)
    console.log(" *** str *** :", str)

    fs.writeFileSync('todo.json', str)



    // todos.push({ data });
    // console.log("todos :", todos)

    // console.log(" *** file b *** :", file_content)
    // file_content = JSON.parse(file_content)
    // console.log(" *** file a *** :", file_content)
    // fs.appendFile('todo.json', data, (err)=>{

    // })
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



