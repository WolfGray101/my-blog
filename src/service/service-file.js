export default class ServiceFile {
  baseURL = 'https://blog.kata.academy/api/'


  async getResponce(url) {
    try {
      const response = await fetch(`${this.baseURL}/${url}`)
      if (!response.ok) {
        throw new Error(response.status)
      }
const result = await response.json()
console.log(result);
      return result
    } catch (err) {
      throw new Error(err)
    }
  }

  async getKey() {
    const res = await this.getResponce('search')
    return res
  }

  async getTicket(id) {
    const res = await this.getResponce(`tickets?searchId=${id}`)
    return res
  }
}
