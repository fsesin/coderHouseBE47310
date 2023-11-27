export class UserNotFoundError extends Error {
  constructor(id = " ") {
    super(`User ${id} not found.`);
  }
}
