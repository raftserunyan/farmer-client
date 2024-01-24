export class StorageService {
  static set (key, value) {
    try {
      localStorage.setItem(
        key,
        typeof value === 'object'
          ? JSON.stringify(value)
          : value
      )

      return true
    } catch {
      return false
    }
  }

  static get (key) {
    const item = localStorage.getItem(key)

    try {
      return JSON.parse(item)
    } catch {
      return item
    }
  }

  static remove (key) {
    try {
      localStorage.removeItem(key)

      return true
    } catch {
      return false
    }
  }
}