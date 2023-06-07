/**
 * @typedef {Object} HtmlReference
 * @property {HTMLElement} header_search - Reference to the header search element.
 * @property {HTMLElement} header_settings - Reference to the header settings element.
 * @property {HTMLElement} list_items - Reference to the list items element.
 * @property {HTMLElement} list_message - Reference to the list message element.
 * @property {HTMLElement} list_button - Reference to the list button element.
 * @property {HTMLElement} list_active - Reference to the list active element.
 * @property {HTMLElement} list_blur - Reference to the list blur element.
 * @property {HTMLElement} list_image - Reference to the list image element.
 * @property {HTMLElement} list_title - Reference to the list title element.
 * @property {HTMLElement} list_subtitle - Reference to the list subtitle element.
 * @property {HTMLElement} list_description - Reference to the list description element.
 * @property {HTMLElement} list_close - Reference to the list close element.
 * @property {HTMLElement} search_overlay - Reference to the search overlay element.
 * @property {HTMLElement} search_form - Reference to the search form element.
 * @property {HTMLElement} search_title - Reference to the search title element.
 * @property {HTMLElement} search_genres - Reference to the search genres element.
 * @property {HTMLElement} search_authors - Reference to the search authors element.
 * @property {HTMLElement} search_cancel - Reference to the search cancel element.
 * @property {HTMLElement} settings_overlay - Reference to the settings overlay element.
 * @property {HTMLElement} settings_form - Reference to the settings form element.
 * @property {HTMLElement} settings_theme - Reference to the settings theme element.
 * @property {HTMLElement} settings_cancel - Reference to the settings cancel element.
 */

/**
 * Contains references to various HTML elements selected by their data attributes.
 * @type {HtmlReference}
 */
 
 const htmlReference = {
  
    header_search: document.querySelector('[data-header-search]'),
    header_settings: document.querySelector('[data-header-settings]'),

    list_items: document.querySelector('[data-list-items]'),
    list_message: document.querySelector('[data-list-message]'),
    list_button: document.querySelector('[data-list-button]'),
    list_active: document.querySelector('[data-list-active]'),
    list_blur: document.querySelector('[data-list-blur]'),
    list_image: document.querySelector('[data-list-image'),
    list_title: document.querySelector('[data-list-title]'),
    list_subtitle: document.querySelector('[data-list-subtitle]'),
    list_description: document.querySelector('[data-list-description]'),
    list_close: document.querySelector('[data-list-close]'),

    search_overlay: document.querySelector('[data-search-overlay]'),
    search_form: document.querySelector('[data-search-form]'),
    search_title: document.querySelector('[data-search-title]'),
    search_genres: document.querySelector('[data-search-genres]'),
    search_authors: document.querySelector('[data-search-authors]'),
    search_cancel: document.querySelector('[data-search-cancel]'),

    settings_overlay: document.querySelector('[data-settings-overlay]'),
    settings_form: document.querySelector('[data-settings-form]'),
    settings_theme: document.querySelector('[data-settings-theme]'),
    settings_cancel: document.querySelector('[data-settings-cancel]'),
}

export const {
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
  } = htmlReference;
  
