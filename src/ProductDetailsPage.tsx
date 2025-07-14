import { type FC } from 'react';
import { useParams } from 'react-router';
import { PRODUCTS } from './constants';

export const ProductDetailsPage: FC = () => {
  const { id } = useParams();

  const product = PRODUCTS.find((product) => product.id === Number(id))!;

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
