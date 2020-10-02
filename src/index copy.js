import bar from './bar';
import css from './style.css';

const div = document.createElement('div');

div.classList.add(css.box1);

div.innerHTML = 'hot reload11';

document.body.append(div);

console.log('css', css);
console.log('index.js');
bar();

const test = () => {
  console.log('1231');
  // let PRODUCTION = 123;
  const obj = {
    [PRODUCTION]: 1,
    child: {
      a: PRODUCTION
    },
  }

  console.log('obj', obj);
}

test();

// foo();

// let PRODUCTION = 'i am js var';

let a = PRODUCTION;

let b = process.env.NODE_ENV;

console.log('PRODUCTION: ', PRODUCTION);
// console.log('VERSION: ', VERSION);
console.log('BROWSER_SUPPORTS_HTML5: ', BROWSER_SUPPORTS_HTML5);
console.log('TWO: ', TWO);
// console.log('window: ', window);
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
// console.log('ABC: ', ABC)1;

// index.js
if(module.hot) {
  module.hot.accept('./index.js', function() {
      div.innerHTML = Math.random();
  })
}