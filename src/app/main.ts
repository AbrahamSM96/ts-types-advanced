import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';
import faker from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    title: faker.commerce.productName(),
    size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.random.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  tags: ['12', 'fd'],
});
