const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()

let CONTACTS = [

]

app.use(express.json())

// GET
app.get('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS)
})

// POST
app.post('/api/contacts', (req, res) => {
  const contact = {...req.body, id: v4(), marked: false}
  CONTACTS.push(contact)
  res.status(201).json(contact)
})

// DELETE
app.delete('/api/contacts/:id', (req, res) => {
  CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
  res.status(200).json({message: 'Контакт был удален'})
})

// PUT
app.put('/api/contacts/:id', (req, res) => {
  const idx = CONTACTS.findIndex(c => c.id === req.params.id)
  CONTACTS[idx] = req.body
  res.json(CONTACTS[idx])
})


app.use(express.static(path.resolve(__dirname, 'client')))
app.use(express.static(path.resolve(__dirname, 'politex1')))
app.use(express.static(path.resolve(__dirname, 'politex2')))
app.use(express.static(path.resolve(__dirname, 'politex3')))
app.use(express.static(path.resolve(__dirname, 'politex4')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'politex1', 'index.html'))
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'politex2', 'index.html'))
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'politex3', 'index.html'))
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'politex4', 'index.html'))
})

app.listen(3000, () => console.log('Server has been started on port 3000...'))
