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


class CreateOption extends HTMLElement {
    
    constructor () {
        const optionFragment = document.createDocumentFragment()

        /**
         * This function create options on the form for users to choose which books
         * to read.
         * @param {string} param - the parameter should only be 'genres' or 'authors'
         */

        let createOption = (param) => {
            const firstElement = document.createElement('option')
            firstElement.value = 'any'

            const options = param === genres ? 'Genres' : 'Authors'
            firstElement.innerText = `All ${options}`
            
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
        const optionsForGenres = searchGenres.appendChild(optionFragment)

        //Call the function to create options for authors
        createOption(authors)
        searchAuthors.appendChild(optionFragment)

        /**
         * The author data, from data.js is added on the search form for users to select the the books with only the author they like.
         */
        const optionsForAuthors = searchAuthors.appendChild(optionFragment)

        return {
            optionsForAuthors,
            optionsForGenres
        }

    }

}

export const optionForm = new CreateOption()

/**
 * This function creates DOM elements to be used by each book 
 * @param {string} id - the unique id generated for each book 
 * @param {string} image - The cover page of the book
 * @param {string} title  - The name of the of the book
 * @param {string} author  
 * @returns {HTMLElement}
 */

export const createHTML = (id, image, title, author) => {
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

    return element
}
