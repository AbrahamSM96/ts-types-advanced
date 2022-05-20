const numbers: ReadonlyArray<number> = [1, 23, 4, 45];

//You can`t modify the values to the type of array, is ReadonlyArray
// numbers.push(123);
// numbers.pop();
// numbers.unshift(1905);

numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => {});
