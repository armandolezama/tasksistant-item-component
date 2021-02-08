import { LitElement, html } from 'lit-element';
import '@tasksistant-components/tasksistant-canvas';
import styles from './tasksistant-item-component-styles';

export class TasksistantItemComponent extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.type = 'empty';
    this.subtype = '';
    this.image = '';
    this.validTypes = ['initial', 'final', 'process', 'empty'];
    this.processSubtypes = ['decision', 'action', 'instruction'];
    this.canvasHeight = 100;
    this.canvasWidth = 100;
    this.canvasMargin = 20;
  };

  /**
    * Object describing property-related metadata used by Polymer features
    */
  static get properties() {
    return {
      type: {type: String},
      image: {type: String},
      validTypes: {type: Array},
      processSubtypes: {type: Array},
      canvasHeight: {type: Number},
      canvasWidth: {type: Number},
      canvasMargin: {type: Number}
    };
  };

  static get styles() {
    return styles;
  };

  render() {
    return html`
      <tasksistant-canvas
      .canvasEmptyMarginPixels="${this.canvasMargin}" 
      .canvasHeightPixels="${this.canvasHeight}" 
      .canvasWidthPixels="${this.canvasWidth}">
      </tasksistant-canvas>`;
  };
};
customElements.define('tasksistant-item-component', TasksistantItemComponent);