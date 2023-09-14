import { html, css, LitElement } from 'lit';

export class FootBar extends LitElement {
    static styles = css`
        p {
            font-family: 'Roboto', sans-serif;
            font-size: 13px;
        }
    `;

    static properties = {
        name: {
            type: String,
        }
    }

    constructor() {
        super();
        this.name = 'Warteji';
        this.year = new Date().getFullYear();
    }

    render() {
        return html`
            <p>Copyright &copy; ${this.year} - ${this.name}.</p>
        `;
    }
}

customElements.define('foot-bar', FootBar);
