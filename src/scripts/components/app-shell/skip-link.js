import { html, css, LitElement } from 'lit';

export class SkipLink extends LitElement {
    static styles = css`
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background-color: rgb(33, 159, 201);
            color: white;
            padding: 8px;
            z-index: 100;
            text-decoration: none;
        }
        
        .skip-link:focus {
            top: 0;
        }
    `;

    render() {
        return html`
            <a href="#" class="skip-link">Skip to content</a>
        `;
    }
}

customElements.define('skip-link', SkipLink);
