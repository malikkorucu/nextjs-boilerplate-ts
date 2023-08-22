import { getProducts } from '@/services/products'

export const ProductList = async () => {
  const products = await getProducts()
  return <div>{products.map((item) => item.title)}</div>
}
