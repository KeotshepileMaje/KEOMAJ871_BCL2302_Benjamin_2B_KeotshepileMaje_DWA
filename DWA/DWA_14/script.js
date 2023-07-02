import {LitElement, html ,css} from './libs/lit-html.js'

class TallyCounter extends LitElement {

    static properties = {
        count: {type: Number},
    };
 
    constructor() {
        super()
        this.count = 0;
    }

    increment() {
        this.count++

        if (this.count > 5) {
            return console.log('Number too high')

        }
    }

    decrement() {

        this.count--
        if (this.count < -5) {
            return console.log('Number too low')
        }

    }

    render() {
        return html`
            <h1>Tally Count</h1>

            <div class='display-options'>
                <label>
                    <span>Display</span>
                    <select>
                        <option>Single</option>
                        <option>Multipe</option>
                    </select>
                </label>

                <label>
                    <span>Counter</span>
                    <select>
                        <option>Counter 1</option>
                        <option>Counter 2</option>
                        <option>Counter 3</option>
                    </select>
                </label>
            </div>

            <div class='interface'>
                <div class='display'>
                    <input value='${this.count}'>
                </div>
            
                <button  @click="${this.decrement}">-</button>
                <button @click="${this.increment}">+</button>

            </div>
        `
    }
}

customElements.define('tally-counter', TallyCounter)