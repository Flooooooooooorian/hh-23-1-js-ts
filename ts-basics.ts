
const valueA : string = "Hello World"
const valueB : number = 13.05
const valueC : boolean = true

//System.out.println()
console.log(valueA)
console.log(valueB)


let valueD : string = "Test"
console.log(valueD)

valueD = "ABC123"
console.log(valueD)


// public int add(int a, int b ) {
//
// }

function add(a: number, b: number): number {
    return a + b
}

function multiply(a: number, b: number): number{
    return a * b;
}

console.log(add(13, 9))
console.log(multiply(3, 3))

const student: {name: string, age: number} = {name: "Florian", age: 21}

student.name = "Matthias"

console.log(student)


const product: {id: string, name: string} = {name: "Apple", id: "123"}

const products: {id: string, name: string}[] = [product, {id: "456", name: "Banana"}]

console.log(products)
console.log(products[0])

products.push({id: "789", name: "Gurke"})

console.log(products)



function checkProduct(product: {id: string, name: string}) {
    return product.name.length > 5
}

const newProducts: {id: string, name: string}[] = products.filter(checkProduct)

console.log(newProducts)

