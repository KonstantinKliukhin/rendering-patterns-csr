import type { Product } from '@/types/product';

import { useEffect, useState, type FC } from 'react';

export const ProductDetailsPage: FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  console.log('RENDERED CSR PRODUCT DETAILS PAGE');

  useEffect(() => {
    const id = window.location.pathname.split('/').pop();

    fetch(`http://localhost:5002/api/products/${id}`, {
      headers: { Accept: 'application/json' },
    })
      .then((res) => res.json())
      .then(setProduct)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-green-200 min-w-[320px] max-w-md w-full animate-pulse">
          <div className="w-full h-56 bg-green-200 rounded mb-4" />
          <div className="h-6 w-3/4 bg-green-200 rounded mb-2" />
          <div className="h-4 w-1/2 bg-green-200 rounded mb-2" />
          <div className="h-4 w-1/3 bg-green-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-green-200 rounded mb-2" />
          <div className="h-5 w-1/4 bg-green-200 rounded" />
        </div>
      </main>
    );
  }

  if (!product) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-green-200 min-w-[320px] max-w-md w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded mb-4 border-2 border-green-100"
        />
        <h2 className="text-2xl font-bold text-green-800 mb-2">{product.name}</h2>
        <span className="text-lg text-green-600 font-bold bg-green-100 rounded px-2 py-0.5 mb-2">
          {product.price}
        </span>
        <span className="text-sm text-green-500 mb-1">{product.category}</span>
        <p className="text-base text-green-900 mb-4 text-center">{product.description}</p>
        <span
          className={product.inStock ? 'text-green-700 font-medium' : 'text-red-500 font-medium'}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </main>
  );
};
