import {
    headerSearch,
    headerSettings,

    listItems,
    listMessage,
    listButton,
    listActive,
    listBlur,
    listImage,
    listTitle,
    listSubtitle,
    listDescription,
    listClose,

    searchOverlay,
    searchForm,
    searchTitle,
    searchGenres,
    searchAuthors,
    searchCancel,
    settingsOverlay,
    settingsForm,
    settingsTheme,
    settingsCancel
} from './html_references.js'

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

/**
 * fragement that hold options
 */

const optionFragment = document.createDocumentFragment()

/**
 * This function create options on the form for users to choose which books
 * to read.
 * @param {string} - the parameter should only be 'genres' or 'authors'
 */

let createOption = (param) => {
    const firstElement = document.createElement('option')
    firstElement.value = 'any'
    firstElement.innerText = 'All Genres'
    optionFragment.appendChild(firstElement)

    for (const [id, name] of Object.entries(param)) {
        const element = document.createElement('option')
        element.value = id
        element.innerText = name
        optionFragment.appendChild(element)
    }

}

//Call the function to create options for genres
createOption(genres)
searchGenres.appendChild(optionFragment)

/**
 * The genres data, from data.js is added on the search form for users to select the the books with only the genre they like.
 */
export const optionsForGenres = searchGenres.appendChild(optionFragment)

//Call the function to create options for authors
createOption(authors)
searchAuthors.appendChild(optionFragment)

/**
 * The author data, from data.js is added on the search form for users to select the the books with only the author they like.
 */
export const optionsForAuthors = searchAuthors.appendChild(optionFragment)



// let page = 0;
// let matches = books


// export const fragment = document.createDocumentFragment()
// /**
//  * This function is used to display the 36 books at the time
//  */
// export let displayBooks = () => {
//     for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
//         const element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[author]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }

//     listItems.appendChild(fragment)
// }


// //------------------------------------------//
// /*
//  The variable and function below are used  to display the number of books left to explore 
//  */

// page += 1

// let remainingBooks = (matches.length - (page * BOOKS_PER_PAGE))
// listButton.disabled = remainingBooks < 0

// export const showMoreButton = () => {

//     remainingBooks = (matches.length - (page * BOOKS_PER_PAGE))
    
//     listButton.innerHTML = `
//         <span>Show more</span>
//         <span class="list__remaining"> (${ remainingBooks > 0 ? remainingBooks : 0})</span>
//     `
// }

// export let clickButtonForMOreBooks = () => {
//     displayBooks()
//     page += 1
//     showMoreButton()
// }











