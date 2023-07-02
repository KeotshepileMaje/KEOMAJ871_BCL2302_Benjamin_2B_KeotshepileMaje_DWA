const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape',
    'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// const CreateNameObject = () => {
//     const objectOfNames = {}

//     names.forEach(
//         (firstName, index) => {
//             objectOfNames[index] = firstName
//         }
//     )

//     return objectOfNames
// }

// console.log(CreateNameObject())

// const CreateProviceObject = () => {
//     const objectOfProvice = {}

//     provinces.forEach(
//         (firstName, index) => {
//             objectOfProvice[index] = firstName
//         }
//     )

//     return objectOfProvice
// }

// console.log(CreateProviceObject())

// const createProfile = () => {
//     const objectProfile = []

//     provinces.forEach(
//         (province, index) => {
//             objectProfile[province] = names[index]
//         }
//     )

//     return objectProfile
// }

// console.log(createProfile())

// const provinceToUppercase = () => {
//     const upperCase = []

//     provinces.map(
//         (province, index) => {
//             upperCase[index] = province.toUpperCase()
//         }
//     )
//     return upperCase
// }

// console.log(provinceToUppercase())

// const numberOfLetter = () => {
//     const numberOfLetterArr = []

//     names.map(
//         (name, index) => {
//             numberOfLetterArr[index] = name.length
//         }
//     )

//     return numberOfLetterArr
// }

// console.log(numberOfLetter())

// const sortAlphabetical = () => {

//     return provinces.sort()

// }

// console.log(sortAlphabetical())

// const filterCapeOut = () => {
//     const filteredArray = provinces.filter(
//        (name) => !name.includes('Cape')).map(name => name.replace('Cape', '')    
//     )
//     return filteredArray
// }

// console.log(filterCapeOut())

// const result = names.map(
//     name => name.toLowerCase().includes('s')
// );

// console.log(result);

const createProfileObject = () => {
    return names.reduce((objectProfile, name, index) => {
        objectProfile[name] = provinces[index];
        return objectProfile;
    }, {});
};

console.log(createProfileObject());
