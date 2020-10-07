function calculateTotalPrice(array, prop) {
  // Write code under this line
  let totalPrice = 0;
  for (const prod of array) {
    if (prod.name === prop) {
      totalPrice += prod.price * prod.quantity;
    }
  }
  return totalPrice;
}

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800

//   let totalPrice = 0;
//   prop = [`name`];
//   for (const key in array) {
//     if (array[key][prop]) {
//       totalPrice = array[key].price * array[key].quantity;
//     }
//     return totalPrice;
//   }
