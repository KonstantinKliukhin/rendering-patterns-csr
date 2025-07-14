import { faker } from '@faker-js/faker';
import type { Product } from './types/product';

const getRandomProduct = (i: number): Product => ({
  id: i + 1,
  name: faker.commerce.productName(),
  image: faker.image.urlPicsumPhotos({ width: 300, height: 200, blur: 0, grayscale: false }),
  price: faker.commerce.price({ min: 10, max: 500, dec: 2, symbol: '$' }),
  description: faker.commerce.productDescription(),
  category: faker.commerce.department(),
  inStock: faker.datatype.boolean(),
});

export const PRODUCTS = Array.from({ length: 400 }).map((_, i) => getRandomProduct(i));
