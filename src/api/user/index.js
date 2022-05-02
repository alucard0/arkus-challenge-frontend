import { Post, Get, Delete } from '../'

export default class User {
  static Login(userData) {
    return Post('/auth', userData)
  }
  static GetAll() {
    return Get('/user')
  }
  static DeleteUser(email) {
    return Delete('/user',email)
  }
}
