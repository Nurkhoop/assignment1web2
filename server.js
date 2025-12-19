const express = require('express')

const app = express()
const PORT = 3000

// middleware
app.use(express.json())

// CRUD
const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, 'data.json')

// function for reading
function readData() {
    const data = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
}

// function for writing 
function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
}

// Demo routes

// GET /
app.get('/', (req, res) => {
    res.status(200).send('Server is running')
})

// GET /hello
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from server!' })
})

// GET /time
app.get('/time', (req, res) => {
    const currentTime = new Date()
    res.json({ time: currentTime })
})

// GET /status
app.get('/status', (req, res) => {
    res.status(200).json({ status: 'OK' })
})

// GET /messages
app.get('/messages', (req, res) => {
    const data = readData()
    res.json(data.messages)
})

// POST /messages
app.post('/messages', (req, res) => {
    const data = readData()

    const newObject = {
        id: Date.now(),
        sender: req.body.sender,
        text: req.body.text,
        createdAt: new Date().toISOString()
    }

    data.messages.push(newObject)
    writeData(data)

    res.json(newObject)
})

// PUT /messages/:id 
app.put('/messages/:id', (req, res) => {
    const data = readData()
    const id = Number(req.params.id)

    const message = data.messages.find(o => o.id === id)

    if (!message) {
        return res.status(404).json({ message: 'Message not found' })
    }

    if (req.body.text) {
        message.text = req.body.text
    }

    writeData(data)
    res.json(message)
})

// DELETE /messages/:id  
app.delete('/messages/:id', (req, res) => {
    const data = readData()
    const id = Number(req.params.id)

    const newMessages = data.messages.filter(m => m.id !== id)

    if (newMessages.length === data.messages.length) {
        return res.status(404).json({ message: 'Message not found' })
    }

    data.messages = newMessages
    writeData(data)

    res.json({ success: true })
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})