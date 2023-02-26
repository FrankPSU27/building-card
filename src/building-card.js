import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class BuildingCard extends LitElement {
  static get properties() {
    return {
    name: {type: String,reflect: true},
    imgurl: {type: String},
    top: {type: String},
    bottom: {type: String},
    colors: {type: Boolean, reflect: true}
    }
  }

  static get styles() {
    return css`
    :host([colors]) .wrapper{
      background-color: blue;
    }
      .wrapper {
        width: 400px;
        border: 2px solid black;
        display: inline-flex;
        color: black;
        background-color: grey;
      }
      
      .image {
        width: 400px;
      }

      .container {
          font-weight: bold;
          text-align: center;
          fount-size: 50px;
      }
      
      .button{
        text-transform: uppercase;
        background-color: blue;
        color: white;
        padding: 8px 8px;
        display: none;
        padding: 8px 16px;
        margin-bottom: 10px;
      }

      .toggle{
        background-color: grey;
        color: blue;
      }
      
      @media (max-width: 800px) and (min-width: 300px)  {
        .button2 {
          display: inline-block;
        } 
      }
      
    }`;
  }

  constructor() {
    super();
    this.name = "The Buildings of Penn State";
    this.imgurl = 'https://i4-wp.ist.psu.edu/gencyber/wp-content/uploads/sites/17/2018/03/westgatebuilding-256tord.jpg';
    this.top = 'Westgate';
    this.bottom = 'Keeps me up at night';
    this.opened = false;
  }

  toggleEvent(e){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    this.opened = state;

  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened') {
        this.dispatchEvent(new CustomEvent('opened-changed',
        {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail: {
            value: this[propName]
          }
        }));
      }
    });
  };

  render() {
    return html`
  <div class="wrapper"> <div class="container">
      <h3>${this.name}</h3>
    <meme-maker 
      image-url="${this.imgurl}"
      top-text="${this.top}" 
      bottom-text="${this.bottom}">
    </meme-maker>
      <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
      <summary>INFO</summary>
        <slot></slot>
     </details>
  </div>`;
  }
}

customElements.define('building-card', BuildingCard);