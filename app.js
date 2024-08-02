let fs = require("fs");
let http = require("http");
let bfhl = fs.readFileSync("./dev-data/data.json", "utf-8");
console.log(data);
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    let numbers = [];
    let alphabets = [];
    let highestAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item.toUpperCase() > highestAlphabet.toUpperCase()) {
                highestAlphabet = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: "your_fullname_ddmmyyyy",
        email: "your_email@example.com",
        roll_number: "your_roll_number",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet ? [highestAlphabet] : []
    });
});

app.json('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

