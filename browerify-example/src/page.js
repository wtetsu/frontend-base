
let lib = require('./lib');

class Page {
  constructor(element) {
    this.element = element;
    this.list = [];
  }
  add(str) {
    this.list.push(str);
  }
  build() {
    this.element.innerHTML = null;
    for (let i = 0; i < this.list.length; i++) {
      let newLi = lib.createElement('li', this.list[i]);
      this.element.appendChild(newLi);
    }
  }
}

module.exports = Page;
