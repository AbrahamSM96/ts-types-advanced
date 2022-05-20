// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

// export function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split('');
//   }
// }
export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true; //boolean
  }
}

const rtaArray = parseString('Abraham');
rtaArray.reverse();
// Tengo que validar que es un array para usar funciones de un array
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log(rtaArray, 'rest');

const rtaStr = parseString(['A', 'b', 'r', 'a', 'h', 'a', 'm']);
rtaStr.toLowerCase();
// Tengo que validar que es un string para usar funciones de un string

// if (typeof rtaStr === 'string') {
//   rtaStr.toLocaleLowerCase();
// }
console.log(rtaStr, 'rest');

const rtaboolean = parseString(12);

console.log(rtaboolean, 'boolean');
