const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
  


const connection =  mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "adminpass",
    database: "testing"
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM expenses";
    connection.query(sql, (err, data) => {
        if(err) return res.json("Error");   
        return res.json(data);
    })
})


app.post("/create",(req, res) => {
    
    console.log(req.body);
    const sql = "INSERT INTO expenses(nameOfThing, author, sum, category, commenting) VALUES (?)";
    const values = [
        req.body.name,
        req.body.author,
        parseInt(req.body.sum),
        parseInt(req.body.category),
        req.body.commenting
    ]
        
    console.log(req.body.name)
    connection.query(sql, [values] ,(err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.put("/edit/:id",(req, res) => {
    
    console.log(req.body);
    const sql = "UPDATE expenses SET nameOfThing = ?, author = ?, sum = ?, category = ?, commenting = ? WHERE id = ? ";
    const values = [
        req.body.name,
        req.body.author,
        parseInt(req.body.sum),
        parseInt(req.body.category),
        req.body.commenting
    ]
        
    const id = parseInt(req.params.id);

    console.log(req.body.name)
    connection.query(sql, [...values, id] ,(err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.delete('/thing/:id', (req, res) => {
    const sql = "DELETE FROM expenses WHERE id = ?";
    const id = parseInt(req.params.id);

    connection.query(sql, [id], (err, data) => {
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.listen(7777, () => {
    console.log("localhost:7777");
})

