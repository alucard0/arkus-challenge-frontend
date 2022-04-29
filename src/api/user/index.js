import { Post, Get } from '../'

export default class User {
  static Login(userData) {
    return Post('/auth', userData)
  }
  static GetAll() {
    return Get('/user')
  }
}
