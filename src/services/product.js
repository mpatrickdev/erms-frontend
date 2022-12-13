import useApi from '../composables/useApi'


export default function productService () {
  const { fetch, get, create, update, destroy } = useApi('products')

  return {
    fetch,
    get,
    create,
    update,
    destroy
  }
}
