const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// const newProductList = products.filter(

//     ({product}) => product.length < 6
// )

// console.log(newProductList)

const stringToNumber = products.map(
    (product) => {
        product.price = parseInt(product.price)

        return product
    }
)

// console.log(stringToNumber)

const onlyPricedProduct = stringToNumber.filter(
    ({price}) => {
        if ( typeof price === 'number' ) {
        
            return price 
          
        }
 
    }
)

console.log(onlyPricedProduct)


const totalPrice = onlyPricedProduct.reduce(
    ( total, currentValue ) => {
        return total + currentValue.price
    },
    0
)

console.log(totalPrice)


