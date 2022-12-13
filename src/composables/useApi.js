import { api } from '../boot/axios'

export default function useApi (url) {
  const fetch = async () => {
    try {
      const {data} = await api.get(url)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const get = async (id) => {
    try {
      const {data} = await api.get(`${url}/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const create = async (payload) => {
    try {
      const {data} = await api.post(url, payload)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const update = async (payload) => {
    try {
      const {data} = await api.put(`${url}/${payload._id}`, payload)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const destroy = async (id) => {
    try {
      const {data} = await api.delete(`${url}/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    fetch,
    get,
    create,
    update,
    destroy
  }
}
