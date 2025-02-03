const express = require('express');
const app = express() ;
const port = 3000 ;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})

app.get('/', (req, res) => {
    res.send("hello")
});

app.post('/signup', (req, res) => {
    const {username, email, password, dateOfBirth} = req.body

    if(!username){
        return res.status(400).json({ error: "Username cannot be empty"})
    }

    if(!email){
        return res.status(400).json({ error: "Email cannot be empty"})
    }

    if(!password){
        return res.status(400).json({ error: "Password cannot be enpty"})
    }

    if(password.length < 8 && password.length  > 16){
        return res.status(400).json({ error: "Pass"})
    }

    if(!dateOfBirth){
        return res.status(400).json({ error: "Date of birth cannot be empty"})
    }

    res.status(201).json({
        message: "User signed up successfully",
        user: {
            username,
            email,
            dateOfBirth
        }
    })
})