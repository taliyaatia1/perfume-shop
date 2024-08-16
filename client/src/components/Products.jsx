import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../Redux/Action/Product";
import { Link } from "react-router-dom";

const Products = ({products}) => {
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, error } = productListReducer;

 
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products && products.length > 0 ? (
                products.map((product, index) => (
                  <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="bg-white">
                      <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          <div className="group relative text-center">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <h3 className="text-lg font-bold text-gray-900">
                                <Link to={`/products/${product._id}`}>
                                  <span aria-hidden="true" className="absolute inset-0"></span>
                                  {product.name}
                                </Link>
                              </h3>
                              <p className="mt-1 text-lg font-semibold text-gray-900">
                                ${product.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Products;
