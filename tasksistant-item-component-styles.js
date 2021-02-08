import { css } from 'lit-element';

export default css`
  :host {
    display: inline-block;
    box-sizing: border-box; }

  :host([hidden]), [hidden] {
    display: none !important; }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit; 
  }

  tasksistant-canvas {
    --tasksistant-canvas-canvas-container-width: 100px;
    --tasksistant-canvas-canvas-container-height: 100px;
    --tasksistant-canvas-tasksistant-canvas-width: 100px;
    --tasksistant-canvas-tasksistant-canvas-height: 100px;
  }
  `;