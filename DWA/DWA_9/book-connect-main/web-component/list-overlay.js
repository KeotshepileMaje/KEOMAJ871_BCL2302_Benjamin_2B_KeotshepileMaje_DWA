import { 
    books,
    authors,
    genres,
    BOOKS_PER_PAGE 
} from '../module/data.js'



const template = document.createElement('template')

template.innerHTML = /*html */
`
    <style>
        .overlay__preview {
            overflow: hidden;
            margin: -1rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .overlay__title {
            padding: 1rem 0 0.25rem;
            font-size: 1.25rem;
            font-weight: bold;
            line-height: 1;
            letter-spacing: -0.1px;
            max-width: 25rem;
            margin: 0 auto;
            color: rgba(var(--color-dark), 0.8)
        }
        
        .overlay__blur {
            width: 100%;
            height: 200px;
            filter: blur(10px);
            opacity: 0.5;
            transform: scale(2);
        }
        
        .overlay__image {
            max-width: 10rem;
            position: absolute;
            top: 1.5m;
            left: calc(50% - 5rem);
            border-radius: 2px;
            box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
        }
        .overlay__data {
            font-size: 0.9rem;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            color: rgba(var(--color-dark), 0.8)
        }
        
        .overlay__button {
            font-family: Roboto, sans-serif;
            background-color: rgba(var(--color-blue), 0.1);
            transition: background-color 0.1s;
            border-width: 0;
            border-radius: 6px;
            height: 2.75rem;
            cursor: pointer;
            width: 50%;
            color: rgba(var(--color-blue), 1);
            font-size: 1rem;
            border: 1px solid rgba(var(--color-blue), 1);
        }
        
        .overlay__button_primary {
            background-color: rgba(var(--color-blue), 1);
            color: rgba(var(--color-force-light), 1);
        }
        
        .overlay__button:hover {
            background-color: rgba(var((var(--color-blue))), 0.2);
        }
        
        
        .overlay__button_primary:hover {
            background-color: rgba(var(--color-blue), 0.8);
            color: rgba(var(--color-force-light), 1);
        }
        
    </style>
    <div class="overlay__preview">
        <img class="overlay__blur" data-list-blur src=""/>
        <img class="overlay__image" data-list-image src=""/>
    </div>
    <div class="overlay__content">
        <h3 class="overlay__title" data-list-title><slot/></h3>
        <div class="overlay__data" data-list-subtitle><slot/></div>
        <p class="overlay__data overlay__data_secondary" data-list-description><slot/></p>
    </div>

    <div class="overlay__row">
        <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
    </div>
 
`
console.log(template)

const listItems = document.querySelector('[data-list-items]')
const listMessage = document.querySelector('[data-list-message]')
const listButton = document.querySelector('[data-list-button]')
const listActive = document.querySelector('[data-list-active]')
const listBlur = document.querySelector('[data-list-blur]')
const listImage = document.querySelector('[data-list-image')
const listTitle = document.querySelector('[data-list-title]')
const listSubtitle = document.querySelector('[data-list-subtitle]')
const listDescription = document.querySelector('[data-list-description]')
const listClose = document.querySelector('[data-list-close]')

class ListOverlay extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({ mode: 'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        const handlerMoreAboutTheBook =  (event) => {
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
        }
        
        listItems.addEventListener('click', handlerMoreAboutTheBook )
        listClose.addEventListener('click', () => {
            listActive.open = false
        })  
    }

}

export default ListOverlay























// const template = document.createElement('template')

// template.innerHTML = /*html */
// `
//     <style>
//         .overlay__preview {
//             overflow: hidden;
//             margin: -1rem;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }
        
//         .overlay__title {
//             padding: 1rem 0 0.25rem;
//             font-size: 1.25rem;
//             font-weight: bold;
//             line-height: 1;
//             letter-spacing: -0.1px;
//             max-width: 25rem;
//             margin: 0 auto;
//             color: rgba(var(--color-dark), 0.8)
//         }
        
//         .overlay__blur {
//             width: 100%;
//             height: 200px;
//             filter: blur(10px);
//             opacity: 0.5;
//             transform: scale(2);
//         }
        
//         .overlay__image {
//             max-width: 10rem;
//             position: absolute;
//             top: 1.5m;
//             left: calc(50% - 5rem);
//             border-radius: 2px;
//             box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
//         }
//         .overlay__data {
//             font-size: 0.9rem;
//             display: -webkit-box;
//             -webkit-line-clamp: 6;
//             -webkit-box-orient: vertical;  
//             overflow: hidden;
//             color: rgba(var(--color-dark), 0.8)
//         }
        
//         .overlay__button {
//             font-family: Roboto, sans-serif;
//             background-color: rgba(var(--color-blue), 0.1);
//             transition: background-color 0.1s;
//             border-width: 0;
//             border-radius: 6px;
//             height: 2.75rem;
//             cursor: pointer;
//             width: 50%;
//             color: rgba(var(--color-blue), 1);
//             font-size: 1rem;
//             border: 1px solid rgba(var(--color-blue), 1);
//         }
        
//         .overlay__button_primary {
//             background-color: rgba(var(--color-blue), 1);
//             color: rgba(var(--color-force-light), 1);
//         }
        
//         .overlay__button:hover {
//             background-color: rgba(var((var(--color-blue))), 0.2);
//         }
        
        
//         .overlay__button_primary:hover {
//             background-color: rgba(var(--color-blue), 0.8);
//             color: rgba(var(--color-force-light), 1);
//         }
        
//     </style>
//     <div class="overlay__preview">
//         <img class="overlay__blur" data-list-blur src=""/>
//         <img class="overlay__image" data-list-image src=""/>
//     </div>
//     <div class="overlay__content">
//         <h3 class="overlay__title" data-list-title><slot/></h3>
//         <div class="overlay__data" data-list-subtitle><slot/></div>
//         <p class="overlay__data overlay__data_secondary" data-list-description><slot/></p>
//     </div>

//     <div class="overlay__row">
//         <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
//     </div>
 
// `
// console.log(template)

// class ListOverlay extends HTMLElement {
//     constructor () {
//         super()

//         this.attachShadow({ mode: 'open'})

//         this.shadowRoot.appendChild(template.content.cloneNode(true))
//     }

// }

// export default ListOverlay































// const template = document.createElement('template')

// template.innerHTML = /*html */
// `
//     <style>
//     .overlay {
//         position: fixed;
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         border-width: 0;
//         box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
//         animation-name: enter;
//         animation-duration: 0.6s;
//         z-index: 10;
//         background-color: rgba(var(--color-light), 1);
//       }
//         .overlay__preview {
//             overflow: hidden;
//             margin: -1rem;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }
        
//         .overlay__title {
//             padding: 1rem 0 0.25rem;
//             font-size: 1.25rem;
//             font-weight: bold;
//             line-height: 1;
//             letter-spacing: -0.1px;
//             max-width: 25rem;
//             margin: 0 auto;
//             color: rgba(var(--color-dark), 0.8)
//         }
        
//         .overlay__blur {
//             width: 100%;
//             height: 200px;
//             filter: blur(10px);
//             opacity: 0.5;
//             transform: scale(2);
//         }
        
//         .overlay__image {
//             max-width: 10rem;
//             position: absolute;
//             top: 1.5m;
//             left: calc(50% - 5rem);
//             border-radius: 2px;
//             box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
//         }
//         .overlay__data {
//             font-size: 0.9rem;
//             display: -webkit-box;
//             -webkit-line-clamp: 6;
//             -webkit-box-orient: vertical;  
//             overflow: hidden;
//             color: rgba(var(--color-dark), 0.8)
//         }
        
//         .overlay__button {
//             font-family: Roboto, sans-serif;
//             background-color: rgba(var(--color-blue), 0.1);
//             transition: background-color 0.1s;
//             border-width: 0;
//             border-radius: 6px;
//             height: 2.75rem;
//             cursor: pointer;
//             width: 50%;
//             color: rgba(var(--color-blue), 1);
//             font-size: 1rem;
//             border: 1px solid rgba(var(--color-blue), 1);
//         }
        
//         .overlay__button_primary {
//             background-color: rgba(var(--color-blue), 1);
//             color: rgba(var(--color-force-light), 1);
//         }
        
//         .overlay__button:hover {
//             background-color: rgba(var((var(--color-blue))), 0.2);
//         }
        
        
//         .overlay__button_primary:hover {
//             background-color: rgba(var(--color-blue), 0.8);
//             color: rgba(var(--color-force-light), 1);
//         }
      
//     </style>
//     <div class="overlay" data-list-active>
//     <div class="overlay__preview">
//         <img class="overlay__blur" data-list-blur src=""/>
//         <img class="overlay__image" data-list-image src=""/>
//     </div>
//     <div class="overlay__content">
//         <h3 class="overlay__title" data-list-title><slot name = "bookTitle">giiuiguiug</slot></h3>
//         <div class="overlay__data" data-list-subtitle><slot name = "subtitle">book </slot></div>
//         <p class="overlay__data overlay__data_secondary" data-list-description><slot name = "description">fjkdlsajkfs</slot></p>
//     </div>

//     <div class="overlay__row">
//         <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
//     </div>
//  </div>
// `
// console.log(template)

// class ListOverlay extends HTMLElement {
//     constructor () {
//         super()

//         this.attachShadow({ mode: 'open'})

//         this.shadowRoot.appendChild(template.content.cloneNode(true))
//     }

// }

// customElements.define('list-overlay', ListOverlay)


// // export default ListOverlay