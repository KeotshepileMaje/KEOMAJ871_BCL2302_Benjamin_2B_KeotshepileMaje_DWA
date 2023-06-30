import {LitElement, html ,css} from './libs/lit-html.js'

class TallyCounter extends LitElement {

    static properties = {
        count: {type: Number},
    };

    static styles = css`
        :host {
            display: block;
            background-color: lightgray;
            padding: 8px;
        }
        .display-options {
            display: flex;
        }
        .display{
            width: 500px;
            height: 100px;
        }
        .display p {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 5rem;
        }
        button {
            width: 250px;
            height: 150px;
            font-size: 3rem;
        }
    `
 
    constructor() {
        super()
        this.count = 0;
    }

    increment() {
        this.count++
    }

    decrement() {
        this.count--
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
                    <p>${this.count}</p>
                    </div>
            
                <button  @click="${this.decrement}">-</button>
                <button @click="${this.increment}">+</button>

            </div>
        `
    }
}

customElements.define('tally-counter', TallyCounter)