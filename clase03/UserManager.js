const fs = require('fs')


class UserManager{

    constructor(path){
        this.path = path
    }
    async getUsers(){
        try {
            if(fs.existsSync(this.path)){
                const info = await fs.promises.readFile(this.path,'utf-8')
                return JSON.parse(info)
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async createUser(obj){
        try {
            const users = await this.getUsers()
            let id 
            if(!users.length){
                id = 1
            } else {
                id = users[users.length-1].id+1
            }
            users.push({id,...obj})
            await fs.promises.writeFile(this.path,JSON.stringify(users))

        } catch (error) {
            return error
        }
    }


    async getUserById(idUser){
        try {
            const users = await this.getUsers()
            const user = users.find(u=>u.id === idUser)
            if(user){
                return user
            } else {
                return 'No user'
            }
        } catch (error) {
            return error
        }

    }

    async deleteUser(idUser){
        try {
            const users = await this.getUsers()
            const newArrayUsers = users.filter(u=>u.id!==idUser)
            await fs.promises.writeFile(this.path,JSON.stringify(newArrayUsers))
        } catch (error) {
            return error
        }
    }

}

const user1 = {
    first_name: 'Laura',
    last_name: 'Suarez',
    age: 25,
    course: 'JavaScript'
}

const user2 = {
    first_name: 'Juan',
    last_name: 'Suarez',
    age: 25,
    course: 'JavaScript'
}

const user3 = {
    first_name: 'Maria',
    last_name: 'Suarez',
    age: 25,
    course: 'JavaScript'
}

const user4 = {
    first_name: 'Pedro',
    last_name: 'Suarez',
    age: 25,
    course: 'JavaScript'
}


async function test(){
    const manager1 = new UserManager('Users.json')
    //await manager1.createUser(user4)
    await manager1.deleteUser(4)
    const users = await manager1.getUsers()
    //const user =await manager1.getUserById(2)
    console.log(users);
}
test()