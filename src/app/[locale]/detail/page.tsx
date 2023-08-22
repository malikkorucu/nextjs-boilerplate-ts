import { getSingleProduct } from '@/services/products'
import { Text } from '@/components/Text'
import { ProductList } from '@/components/ProductList'

const Test = async () => {
  const singleProduct = await getSingleProduct(1)

  return (
    <div>
      <h1>
        <Text page="Machines" text="title" />
      </h1>

      <ProductList />

      <div
        id="custom-controls-gallery"
        className="relative w-full"
        data-carousel="slide"
      >
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      <h1>single product deneme :{singleProduct.brand}</h1>
    </div>
  )
}

export default Test
