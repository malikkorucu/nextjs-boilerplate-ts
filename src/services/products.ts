import api from './axiosConfig'

export const getProducts = async () => {
  const res = await api.get('products')

  return res.data.products
}

export const getSingleProduct = async (id: string | number) => {
  const res = await api.get('products/' + id)
  return res.data
}
