const express = require('express');
const app = express();


app.get('/getStudent', (req, res) => {
    const data = [
        {
            name: "Utsav",
            age: 21
        },
        {
            name: "Raj",
            age: 25
        }
    ]
    res.status(200).send({ message: "Student get successfully", data });
})

app.listen(3001, (err) => {
    if (err) throw err;
    console.log("Server starting at port 3001");
})