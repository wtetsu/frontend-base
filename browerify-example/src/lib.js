

module.exports = {
  createElement: (tag, text) => {
    let elem = document.createElement(tag);
    elem.innerText = text;
    return elem;
  }
};
