import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto';
import faker from '@faker-js/faker';
import { Product } from './product.model';
export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'],
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.color = 'blue'
  // readonlyarray no permite el pop y push
  // dto.tags?.pop()
  // dto.tags?.push()
  // dto.tags = []
  return products;
};
