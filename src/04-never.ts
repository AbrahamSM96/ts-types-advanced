const withoutEnd = () => {
  while (true) {
    console.log('Never stop to learning');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('Not match');
};

console.log(example('Hola'));
console.log(example([1, 2, 3, 4, 5]));
console.log(example(134)); // se detiene
console.log(example('Hola despues del fail'));
