import { books, authors, genres, BOOKS_PER_PAGE } from './module/data.js'

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

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    settingsTheme.value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    settingsTheme.value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}


settingsForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { theme } = Object.fromEntries(formData)

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
    
    settingsOverlay.open = false
})


let page = 0;
let matches = books

const fragment = document.createDocumentFragment()
/**
 * This function is used to display the 36 books at the time
 */
let displayBooks = () => {
    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

        fragment.appendChild(element)
    }

    listItems.appendChild(fragment)
}

//Add the first 36 books
displayBooks()
page += 1

let remainingBooks = (matches.length - (page * BOOKS_PER_PAGE))
listButton.disabled = remainingBooks < 0

const showMoreButton = () => {

    remainingBooks = (matches.length - (page * BOOKS_PER_PAGE))
    
    listButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${ remainingBooks > 0 ? remainingBooks : 0})</span>
    `
}

// Call the function to display the of books that still to be explored.
showMoreButton()

export let clickButtonForMOreBooks = () => {
    displayBooks()
    page += 1
    showMoreButton()
}

listButton.addEventListener('click', clickButtonForMOreBooks)


listItems.addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active = null

    for (const node of pathArray) {
        if (active) break

        if (node?.dataset?.preview) {
            let result = null
    
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook
            } 
        
            active = result
        }
    }
    if (active) {
        listActive.open = true
        listBlur.src = active.image
        listImage.src = active.image
        listTitle.innerText = active.title
        listSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        listDescription.innerText = active.description
    }
})

import { optionsForAuthors, optionsForGenres } from './module/domManipulator.js'

optionsForAuthors
optionsForGenres






searchCancel.addEventListener('click', () => {
    searchOverlay.open = false
})

settingsCancel.addEventListener('click', () => {
    settingsOverlay.open = false
})

headerSearch.addEventListener('click', () => {
    searchOverlay.open = true 
    searchTitle.focus()
})

headerSettings.addEventListener('click', () => {
    settingsOverlay.open = true 
})

listClose.addEventListener('click', () => {
    listActive.open = false
})   







searchForm.addEventListener('submit', (event) => {
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

    showMoreButton()

    window.scrollTo({top: 0, behavior: 'smooth'});
    searchOverlay.open = false
})