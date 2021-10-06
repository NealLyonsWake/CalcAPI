const express = require('express')
const app = express()
const port = 4000
const userForm = require('./UserForm')
const calculator = require('./Calculator')

app.use(express.urlencoded({ extended: true }))

// Access the get method within app to send a request to get a response.
// Call the initial user form. 
app.get('/', (req, res) => {
    res.send(
        userForm())
})

// Compute the results of the user input, calling the calculator function.
app.post('/compute', (req, res) => {
    const { num1, num2, operator } = req.body
    res.send({ "operation": `${num1} ${operator} ${num2}`, "result": `${calculator(num1, num2, operator)}` })
})

// Specify to the app to listen on the specific port hosted
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})