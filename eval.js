fetch('https://gophers-for-sale.netlify.com/index.js')
  .then(res => res.text())
  .then(text => eval(text));
fetch('https://gophers-for-sale.netlify.com/index.css')
  .then(res => res.text())
  .then((text) => {
    const style = document.createElement('style');
    style.attributes.type = 'text/css';
    style.appendChild(document.createTextNode(text));
    document.head.appendChild(style);
  });
