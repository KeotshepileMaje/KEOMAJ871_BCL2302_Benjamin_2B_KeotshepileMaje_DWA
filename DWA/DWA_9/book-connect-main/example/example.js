class CreateHTML extends HTMLElement {
    constructor (id, image, title, author) {
        super();

        this.attachShadow({mode: 'open'});

        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);
    
        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${author}</div>
            </div>
        `;

        this.shadowRoot.appendChild(element);
    }
    
}

customElements.define( 'create-html', CreateHTML)

