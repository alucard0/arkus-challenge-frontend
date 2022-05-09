import { Get } from '../'

export default class Account {
  static GetAll() {
    return Get('/team')
  }
}
