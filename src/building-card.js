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
      
      .header {
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
      }
      
      .header h3 {
        transition: .3s ease-in-out all;
        margin: 16px;
        font-style: normal;
      }
      
      .details summary {
        fount-size: 20px;
        fount-weight: bold;
      }
      .button2{
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
  }

  render() {
    return html`
  <div class="wrapper">
    <div class="container">
    <div class="header">
      <h3>${this.name}</h3>
      <meme-maker image-url="${this.imgurl}" top-text="${this.top}" bottom-text="${this.bottom}"></meme-maker>
    </div>
    <details class="details">
    <slot>
    </slot>
      <summary>INFO</summary>
      <div>
        <ul>
          <li>The college of IST at Penn State is the perfect place for yong srudents to learn IT skills so they can function in society. 
            If you would like to know more about the opritunities offered at PSU click the detals button bellow.</li>
         </ul>
      </div>
      </details>
      <a href="https://hax.psu.edu" class="button2">Detals</a>
  </div>`;
  }
}

customElements.define('building-card', BuildingCard);