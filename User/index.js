const express = require('express');
const app = express();


app.get('/getUser', (req, res) => {
    const data = [
        {
            name: "Utsav",
            email: "test@gmail.com"
        },
        {
            name: "Raj",
            email: "raj123@gmail.com"
        }
    ]
    res.status(200).send({ message: "User get successfully", data });
})

app.listen(3002, (err) => {
    if (err) throw err;
    console.log("Server starting at port 3002");
})