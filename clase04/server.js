//const express = require('express')
import express from 'express'
import { usersManager } from './UsersManager.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// SIN USERSMANAGER
// const users = [
//   {
//     id: 1,
//     name: 'Juan',
//   },
//   {
//     id: 2,
//     name: 'Laura',
//   },
//   {
//     id: 3,
//     name: 'Luis',
//   },
//   {
//     id: 4,
//     name: 'Maria',
//   },
//   {
//     id: 5,
//     name: 'Carlos',
//   },
//   {
//     id: 6,
//     name: 'Marcela',
//   },
// ]
// params - query

//todos los usuarios
// app.get('/users', (req, res) => {
//   console.log('query', req.query)
//   const { name, sort } = req.query
//   // if(name){
//   //     const user = users.find(u=>u.name===name)
//   //     return res.json({message:'User',user})
//   // }
//   const usersArray =
//     sort === 'ASC'
//       ? users.sort((a, b) => a.name.localeCompare(b.name))
//       : users.sort((a, b) => b.name.localeCompare(a.name))
//   res.json({ message: 'All users', users: usersArray })
// })

// app.get('/users/:idUser', (req, res) => {
//   const { idUser } = req.params
//   const user = users.find((u) => u.id === +idUser)
//   console.log(user)
//   res.json({ message: 'User', user })
// })

app.get('/users', async (req, res) => {
  try {
    const users = await usersManager.getUsers(req.query)
    if (!users.length) {
      res.status(200).json({ message: 'No users found' })
    } else {
      res.status(200).json({ message: 'Users found', users })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.get('/users/:idUser', async (req, res) => {
  const { idUser } = req.params
  try {
    const user = await usersManager.getUserById(+idUser)
    if (!user) {
      res.status(400).json({ message: 'User not found with the id sent' })
    } else {
      res.status(200).json({ message: 'User found', user })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.post('/users', async (req, res) => {
  const { first_name, email, password } = req.body
  if (!first_name || !email || !password) {
    return res.status(400).json({ message: 'Some data is missing' })
  }
  try {
    const newUser = await usersManager.createUser(req.body)
    res.status(200).json({ message: 'User created', user: newUser })
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.delete('/users/:idUser', async (req, res) => {
  const { idUser } = req.params
  try {
    const response = await usersManager.deleteUser(+idUser)
    if (response === -1) {
      res.status(400).json({ message: 'User not found with the id sent' })
    } else {
      res.status(200).json({ message: 'User deleted' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.put('/users/:idUser', async (req, res) => {
  const { idUser } = req.params
  try {
    const response = await usersManager.updateUser(+idUser, req.body)
    if (response === -1) {
      res.status(400).json({ message: 'User not found with the id sent' })
    } else {
      res.status(200).json({ message: 'User updated' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})
