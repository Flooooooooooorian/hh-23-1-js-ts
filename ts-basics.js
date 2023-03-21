var valueA = "Hello World";
var valueB = 13.05;
var valueC = true;
//System.out.println()
console.log(valueA);
console.log(valueB);
var valueD = "Test";
console.log(valueD);
valueD = "ABC123";
console.log(valueD);
// public int add(int a, int b ) {
//
// }
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
console.log(add(13, 9));
console.log(multiply(3, 3));
var student = { name: "Florian", age: 21 };
student.name = "Matthias";
console.log(student);
var product = { name: "Apple", id: "123" };
var products = [product, { id: "456", name: "Banana" }];
console.log(products);
console.log(products[0]);
products.push({ id: "789", name: "Gurke" });
console.log(products);
function checkProduct(product) {
    return product.name.length > 5;
}
var newProducts = products.filter(checkProduct);
console.log(newProducts);
