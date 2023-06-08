import { books, authors, genres, BOOKS_PER_PAGE } from './module/data.js'

import { 
        header_search,
        header_settings,

        list_items,
        list_message,
        list_button,
        list_active,
        list_blur,
        list_image,
        list_title,
        list_subtitle,
        list_description,
        list_close,

        search_overlay,
        search_form,
        search_title,
        search_genres,
        search_authors,
        search_cancel,
        settings_overlay,
        settings_form,
        settings_theme,
        settings_cancel
    } from './module/html_references.js'

search_cancel.addEventListener('click', () => {
    search_overlay.open = false
})

settings_cancel.addEventListener('click', () => {
    settings_overlay.open = false
})

header_search.addEventListener('click', () => {
    search_overlay.open = true 
    search_title.focus()
})

header_settings.addEventListener('click', () => {
    settings_overlay.open = true 
})

list_close.addEventListener('click', () => {
    list_active.open = false
})   


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    settings_theme.value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    settings_theme.value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}


settings_form.addEventListener('submit', (event) => {
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
    
    settings_overlay.open = false
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

    list_items.appendChild(fragment)
}

displayBooks()
page += 1

list_button.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
list_button.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 0

list_button.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`

list_button.addEventListener('click', () => {
    displayBooks()
    page += 1
})


list_items.addEventListener('click', (event) => {
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
        list_active.open = true
        list_blur.src = active.image
        list_image.src = active.image
        list_title.innerText = active.title
        list_subtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        list_description.innerText = active.description
    }
})

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
search_genres.appendChild(optionFragment)

//Call the function to create options for authors
createOption(authors)
search_authors.appendChild(optionFragment)

search_form.addEventListener('submit', (event) => {
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

    page = 1;
    matches = result

    if (result.length < 1) {
        list_message.classList.add('list__message_show')
    } else {
        list_message.classList.remove('list__message_show')
    }

    list_items.innerHTML = ''
    const newItems = document.createDocumentFragment()

    for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
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

        newItems.appendChild(element)
    }

    list_items.appendChild(newItems)
    list_button.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

    list_button.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `

    window.scrollTo({top: 0, behavior: 'smooth'});
    search_overlay.open = false
})