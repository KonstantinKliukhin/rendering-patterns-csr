import { useEffect, useState, type FC } from 'react';

import type { Product } from '@/types/product';
import { Link } from 'react-router';

export const ProductsPage: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:5002/api/products', {
      headers: { Accept: 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  console.log('RENDERED CSR PRODUCTS LIST PAGE');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br bg-white py-20">
      <h1 className="text-4xl md:text-5xl mb-16 font-bold text-green-500">
        Client Side Rendering (CSR)
      </h1>
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-indigo-100 min-w-[320px] w-full max-w-6xl">
        <span className="text-xl font-semibold mb-4 text-black">
          Client-only Data Fetch Example
        </span>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-slate-100 rounded-lg shadow p-4 border border-indigo-50 animate-pulse w-full"
              >
                <div className="w-full h-40 bg-slate-200 rounded mb-2" />
                <div className="h-4 w-3/4 bg-slate-200 rounded mb-1" />
                <div className="h-3 w-1/2 bg-slate-200 rounded mb-1" />
                <div className="h-3 w-1/3 bg-slate-200 rounded mb-2" />
                <div className="h-4 w-1/2 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div
            data-testid="products-list"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-4"
          >
            {products.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="flex cursor-pointer flex-col items-start bg-white rounded-lg shadow p-4 border border-indigo-100 w-full hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <div className="flex-1 w-full flex flex-col">
                  <div className="flex justify-between mb-2 gap-x-2">
                    <span className="font-semibold text-slate-800 text-lg leading-tight">
                      {product.name}
                    </span>
                    <span className="text-indigo-600 font-bold text-lg leading-tight">
                      {product.price}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 mb-1 block">{product.category}</span>
                  <span className="text-sm text-slate-600 mb-2 block line-clamp-2">
                    {product.description}
                  </span>
                  <span
                    className={[
                      'mt-auto',
                      product.inStock ? 'text-green-600 font-medium' : 'text-red-500 font-medium',
                    ].join(' ')}
                  >
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
