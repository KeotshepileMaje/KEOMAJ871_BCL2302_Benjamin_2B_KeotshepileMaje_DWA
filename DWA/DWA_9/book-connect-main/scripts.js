//Imports

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
} from './module/html_references.js'

import { 
    setThemeBasedOnMediaQuery,
    handleThemePreference 
} from './module/theme.js';

import { 
    books,
    authors,
    genres,
    BOOKS_PER_PAGE 
} from './module/data.js'

import { 
    optionForm
} from './module/domManipulator.js'


import { 
    createHTML 
} from './module/domManipulator.js';

import ListOverlay from './web-component/list-overlay.js';

window.customElements.define('list-overlay', ListOverlay)

console.log(document.querySelector('list-overlay'))



import SetttingOverlay from './web-component/settings-overlay.js';


window.customElements.define('setting-overlay', SetttingOverlay)


/*---THEME FUNCTIONALITY--- */

//Call the function to check the Theme set in MediaQuery
setThemeBasedOnMediaQuery()

settingsForm.addEventListener('submit', handleThemePreference)

headerSettings.addEventListener('click', () => {
    settingsOverlay.open = true 
})

settingsCancel.addEventListener('click', () => {
    settingsOverlay.open = false
})

/*---SEARCH FORM OPTION--- */
optionForm

/*--- BOOK LIST-- */

//The page is initially set to 0 because there are no books added yet.
let page = 0; 

let matches = books

const fragment = document.createDocumentFragment()

/**
 * This function is used to display the 36 books at the time
 */

let displayBooks = () => {
    const bookRange = matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)

    for (const { author, id, image, title } of bookRange ) {
        let preview = createHTML(id, image, title, author)
        fragment.appendChild(preview) 

    }

    listItems.appendChild(fragment)
}

/**
 * The showMoreButton updates the number of books left
 * @property {number} remainingBooks
 */
const numberOfBooksRemaining = () => {
    const remainingBooks = (matches.length - (page * BOOKS_PER_PAGE)) 
    
    listButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${ remainingBooks > 0 ? remainingBooks : 0})</span>
    `
}

const initializeFirstPage = () => {
    //Add the first 36 books
    const first36Books = displayBooks()
    first36Books

    //Updates the page variable to reflect the current page.
    page = 1

    // Call the function to display the of books that still to be explored.
    numberOfBooksRemaining()
}
//call theFirstPage
initializeFirstPage()

export let handlerButtonForMoreBooks = () => {
    displayBooks()
    page += 1
    numberOfBooksRemaining()
}

listButton.addEventListener('click', handlerButtonForMoreBooks)



//----------------------------------------------------------


// const handlerMoreAboutTheBook =  (event) => {
//     const pathArray = Array.from(event.path || event.composedPath())
//     let active = null

//     for (const node of pathArray) {
//         if (active) break

//         if (node?.dataset?.preview) {
//             let result = null
    
//             for (const singleBook of books) {
//                 if (result) break;
//                 if (singleBook.id === node?.dataset?.preview) result = singleBook
//             } 

//             active = result
//         }
//     }
//     if (active) {
//         listActive.open = true
//         listBlur.src = active.image
//         listImage.src = active.image
//         listTitle.innerText = active.title
//         listSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
//         listDescription.innerText = active.description
//     }
// }

// listItems.addEventListener('click', handlerMoreAboutTheBook )

// listClose.addEventListener('click', () => {
//     listActive.open = false
// })  



searchCancel.addEventListener('click', () => {
    searchOverlay.open = false
})

headerSearch.addEventListener('click', () => {
    searchOverlay.open = true 
    searchTitle.focus()
})

/**
 * 
 */
const handlerSearchForm = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []

    for (const book of books) {
        let genreMatch = filters.genre === 'any'

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book)
        }
    }
   
    page = 0;
    matches = result

    if (result.length < 1) {
        listMessage.classList.add('list__message_show')
    } else {
        listMessage.classList.remove('list__message_show')
    }

    listItems.innerHTML = ''
    displayBooks()
    listItems.appendChild(fragment)

    page += 1

    listButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 0

    numberOfBooksRemaining()

    window.scrollTo({top: 0, behavior: 'smooth'});
    searchOverlay.open = false
}

searchForm.addEventListener('submit', handlerSearchForm )