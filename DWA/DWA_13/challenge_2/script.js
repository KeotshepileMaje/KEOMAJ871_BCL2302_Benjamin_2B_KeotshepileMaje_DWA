const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const newProductList = products.filter(

    ({product}) => product.length < 6
)

//console.log(newProductList)

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

// console.log(onlyPricedProduct)

const totalPrice = onlyPricedProduct.reduce(
    ( total, currentValue ) => {
        return total + currentValue.price
    },
    0
)

// console.log(totalPrice)

const concatenatedString = products.reduce((accumulator, currentProduct) => {
    if (currentProduct.product !== '') {
        if (accumulator !== '') {
            accumulator += ', ';
        }
        accumulator += currentProduct.product;
        }
        return accumulator;
    }
    , ''
);

// console.log(concatenatedString);

const highestPriceItem = products.reduce((maxProduct, currentProduct) => {
    if (currentProduct.price > maxProduct.price) {
        return currentProduct;
    }
    return maxProduct;
}).product;

const lowestPriceItem = products.reduce((minProduct, currentProduct) => {
    if (currentProduct.price < minProduct.price) {
        return currentProduct;
    }
    return minProduct;
}).product;
  
const resultString = `Highest: ${highestPriceItem}. Lowest: ${lowestPriceItem}.`;
  
// console.log(resultString);

const transformedArray = Object.entries(products).reduce(
    (newArray, [index, item]) => {
        const newItem = {
            name: item.product,
            cost: item.price
        };
        newArray[index] = newItem;
        return newArray;
    }
    ,
    []
);
  
console.log(transformedArray);
