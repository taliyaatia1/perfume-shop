import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../Layouts/Layouts';
import { addToCartAction } from '../Redux/Action/Cart';
import { productDetailAction } from '../Redux/Action/Product';

function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.productReducer);
  const { loading, error, product } = productReducer;

  useEffect(() => {
    dispatch(productDetailAction(id));
  }, [dispatch, id]);

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(addToCartAction(id, qty));
  };

  return (
    <Layout>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={product.image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {product.brand}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                    {product.name}
                  </h1>
                  <p className="leading-relaxed text-lg mb-6">
                    {product.description}
                  </p>
                  <h1>
                  <p className="leading-relaxed text-lg mb-6">
                  <span className="mr-3">Gender:</span>
                    {product.gender}
                  </p>
                  </h1>

                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex">
                      <span className="mr-3">Quantity:</span>
                      <select
                        value={qty}
                        onChange={(e) => setQty(parseInt(e.target.value))}
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                      >
                        {[...Array(10).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${product.price}
                    </span>
                    <button
                      onClick={addToCartHandler}
                      className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}

export default ProductDetail;
