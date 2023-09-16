import fs from 'fs'

class UsersManager {
  constructor(path) {
    this.path = path
  }
  async getUsers(queryObj) {
    const { order } = queryObj
    try {
        if (fs.existsSync(this.path)) {
          console.log('order',order);
        const info = await fs.promises.readFile(this.path, 'utf-8')
        const infoParsed = JSON.parse(info)
        return order === 'ASC'
          ? infoParsed.sort((a, b) => a.first_name.localeCompare(b.first_name))
          : order === 'DESC'
          ? infoParsed.sort((a, b) => b.first_name.localeCompare(a.first_name))
          : infoParsed
      } else {
        return []
      }
    } catch (error) {
      return error
    }
  }

  async createUser(obj) {
    try {
      const users = await this.getUsers({})
      let id
      if (!users.length) {
        id = 1
      } else {
        id = users[users.length - 1].id + 1
      }
      const newUser = { id, ...obj }
      users.push(newUser)
      await fs.promises.writeFile(this.path, JSON.stringify(users))
      return newUser
    } catch (error) {
      return error
    }
  }

  async getUserById(idUser) {
    try {
      const users = await this.getUsers({})
      const user = users.find((u) => u.id === idUser)
      return user
    } catch (error) {
      return error
    }
  }

  async deleteUser(idUser) {
    try {
      const users = await this.getUsers()
      const user = users.find((u) => u.id === idUser)
      if (!user) {
        return -1
      }
      const newArrayUsers = users.filter((u) => u.id !== idUser)
      await fs.promises.writeFile(this.path, JSON.stringify(newArrayUsers))
      return 1
    } catch (error) {
      return error
    }
  }

  async updateUser(idUser, obj) {
    try {
      const users = await this.getUsers()
      const index = users.findIndex((u) => u.id === idUser)
      if (index === -1) {
        return -1
      }
      const user = users[index]
      users[index] = { ...user, ...obj }
      await fs.promises.writeFile(this.path, JSON.stringify(users))
      return 1
    } catch (error) {
      return error
    }
  }
}

export const usersManager = new UsersManager('UsersAPI.json')
