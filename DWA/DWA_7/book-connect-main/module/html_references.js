/**
 * @typedef {Object} HtmlReference
 * @property {HTMLElement} headerSearch - Reference to the header search element.
 * @property {HTMLElement} headerSettings - Reference to the header settings element.
 * @property {HTMLElement} listItems - Reference to the list items element.
 * @property {HTMLElement} listMessage - Reference to the list message element.
 * @property {HTMLElement} listButton - Reference to the list button element.
 * @property {HTMLElement} listActive - Reference to the list active element.
 * @property {HTMLElement} listBlur - Reference to the list blur element.
 * @property {HTMLElement} lisImage - Reference to the list image element.
 * @property {HTMLElement} listTitle - Reference to the list title element.
 * @property {HTMLElement} listSubtitle - Reference to the list subtitle element.
 * @property {HTMLElement} listDescription - Reference to the list description element.
 * @property {HTMLElement} listClose - Reference to the list close element.
 * @property {HTMLElement} searchOverlay - Reference to the search overlay element.
 * @property {HTMLElement} searchForm - Reference to the search form element.
 * @property {HTMLElement} searchTitle - Reference to the search title element.
 * @property {HTMLElement} searchGenres - Reference to the search genres element.
 * @property {HTMLElement} searchAuthors - Reference to the search authors element.
 * @property {HTMLElement} searchCancel - Reference to the search cancel element.
 * @property {HTMLElement} settingsOverlay - Reference to the settings overlay element.
 * @property {HTMLElement} settingsForm - Reference to the settings form element.
 * @property {HTMLElement} settingsTheme - Reference to the settings theme element.
 * @property {HTMLElement} settingsCancel - Reference to the settings cancel element.
 */

/**
 * Contains references to various HTML elements selected by their data attributes.
 * @type {HtmlReference}
 */
 
 const htmlReference = {
  
    headerSearch: document.querySelector('[data-header-search]'),
    headerSettings: document.querySelector('[data-header-settings]'),

    listItems: document.querySelector('[data-list-items]'),
    listMessage: document.querySelector('[data-list-message]'),
    listButton: document.querySelector('[data-list-button]'),
    listActive: document.querySelector('[data-list-active]'),
    listBlur: document.querySelector('[data-list-blur]'),
    listImage: document.querySelector('[data-list-image'),
    listTitle: document.querySelector('[data-list-title]'),
    listSubtitle: document.querySelector('[data-list-subtitle]'),
    listDescription: document.querySelector('[data-list-description]'),
    listClose: document.querySelector('[data-list-close]'),

    searchOverlay: document.querySelector('[data-search-overlay]'),
    searchForm: document.querySelector('[data-search-form]'),
    searchTitle: document.querySelector('[data-search-title]'),
    searchGenres: document.querySelector('[data-search-genres]'),
    searchAuthors: document.querySelector('[data-search-authors]'),
    searchCancel: document.querySelector('[data-search-cancel]'),

    settingsOverlay: document.querySelector('[data-settings-overlay]'),
    settingsForm: document.querySelector('[data-settings-form]'),
    settingsTheme: document.querySelector('[data-settings-theme]'),
    settingsCancel: document.querySelector('[data-settings-cancel]'),
}

export const {
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
  } = htmlReference;