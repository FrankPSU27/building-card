import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class BuildingCard extends LitElement {
  static get properties() {
    return {
    name: {
      type: String,
      reflect: true
    },
    }
  }

  static get styles() {
    return css`
      .wrapper {
        width: 400px;
        border: 2px solid black;
        display: inline-flex;
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
      
       @media (max-width: 800px) and (min-width: 500px)  {
          .button2 {
            display: inline-block;
          } 
        }
      
      body{
        background-color: grey;
      }
    }`;
  }

  constructor() {
    super();
    this.name = "WestGate";
  }

  render() {
    return html`
  <div class="wrapper">
    <div class="container">
    <img class="image" src="https://i4-wp.ist.psu.edu/gencyber/wp-content/uploads/sites/17/2018/03/westgatebuilding-256tord.jpg"/>
    <div class="header">
      <h3>${this.name}</h3>
    </div>
    <details class="details">
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