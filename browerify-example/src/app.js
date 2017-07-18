let Page = require('./page');

let page = new Page(document.getElementById('app'));
page.add(new Date().toString());
page.build();

document.getElementById('btnAdd').addEventListener('click', ()=>{
  page.add(new Date().toString());
  page.build();
});
