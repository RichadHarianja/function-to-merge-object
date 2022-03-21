function combine(...params) {
  return params.reduce((acc,item) => {
    Object.entries(item).forEach(([property,value]) => {
      const prev = acc[property];
      acc[property] = prev ? prev+value : value;
    });
    return acc;
  }, {});
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };

console.log(combine(objA, objB) );