import hello from './hello';
import css from './style.css';

function render() {
  const div = document.createElement('p');
  div.innerHTML = hello();
  div.classList = css.box2;
  document.body.append(div);
}

render();

// index.js
if(module.hot) {
  module.hot.accept(['./hello.js', './index.js'], function() {
      div.innerHTML = Math.random();
      render();
  })
}