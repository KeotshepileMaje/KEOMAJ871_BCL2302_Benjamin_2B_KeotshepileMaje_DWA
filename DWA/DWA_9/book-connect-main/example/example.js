








// class CreateHTML extends HTMLElement {
//   constructor() {
//     super();

//     this.attachShadow({ mode: 'open' });

//     const element = document.createElement('button');
//     element.classList.add('preview');
//     // Add the correct id variable value or remove the attribute if not needed
//     element.setAttribute('data-preview', 'YOUR_ID_HERE');

//     element.innerHTML = `
//       <img class="preview__image" src="https://picsum.photos/200" />
//       <div class="preview__info">
//         <h3 class="preview__title">YOUR_TITLE_HERE</h3>
//         <div class="preview__author">YOUR_AUTHOR_HERE</div>
//       </div>
//     `;

//     this.shadowRoot.appendChild(element);
//   }
// }

// customElements.define('create-html', CreateHTML);


// const createHTML = (id, image, title, author) => {
//   const element = document.createElement('button')
//   element.classList = 'preview'
//   element.setAttribute('data-preview', id)

//   element.innerHTML = `
//       <img
//           class="preview__image"
//           src="${image}"
//       />
      
//       <div class="preview__info">
//           <h3 class="preview__title">${title}</h3>
//           <div class="preview__author">${authors[author]}</div>
//       </div>
//   `

//   return element
// }
