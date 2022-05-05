import { Get } from '../'

export default class Manager {
  static GetAllAvailableUsers() {
    return Get('/manager')
  }
}
