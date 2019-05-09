import fetchCounter from "fetch-counter"

class Counter extends HTMLElement {
  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
    this.xValue = 0;
  }

  get x() {
    return this.xValue;
  }

  set x(value) {
    this.xValue = value;
    window.requestAnimationFrame(this.render.bind(this));
  }

  clicked() {
    this.x++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.textContent = this.x.toString();
  }
}

function createCounter(value) {
  return class InitializedCounter extends Counter {
    constructor() {
      super();
      this.xValue = value;
    }
  }
}

// fetchCounter is an external resource that gets us an initial number to start
// counting from
fetchCounter().then(value => {
  // create the element
  window.customElements.define('num-counter', createCounter(value));
});

const counter = document.createElement('num-counter');
document.querySelector('body').appendChild(counter)


/****Questions:
*
*    What is evaluated first?
*
*    What is the innerHTML value of `counter`?
*
*    What is the class of the custom element?
*
*    What is the value of innerHTML if instead of `createCounter` we use `Counter`?
*
*    What is the innerHTML value of `counter`?
*
*
*****/
