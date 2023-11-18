class UsersManager {
  constructor() {
    this.users = [];
  }

  findAll() {
    return this.users;
  }

  findById(id) {
    const user = this.users.find((t) => t.id === id);
    return user;
  }

  createOne(obj) {
    const id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
    const newObj = { id, ...obj };
    this.users.push(newObj);
    return newObj;
  }
}

export const usersManager = new UsersManager();
