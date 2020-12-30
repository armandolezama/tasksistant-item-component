import { LitElement, html } from 'lit-element';
import styles from './tasksistant-item-component-styles';

export class TasksistantItemComponent extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
  }

  /**
    * Object describing property-related metadata used by Polymer features
    */
  static get properties() {
    return {
    };
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`<h3>Hello from item component</h3>`;
  }
}
customElements.define('tasksistant-item-component', TasksistantItemComponent);