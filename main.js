/*
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/

import validator from "validator";

const emailWrong1 = "qweqweAtmail.com";
const emailWrong2 = "qweqwe@mailcom.";
const emailGood = "qweqwe@mail.com";

function checkEmail(string) {
  return validator.isEmail(string);
}

console.log(
  `Is ${emailWrong1} - Ok? - `,
  checkEmail(emailWrong1),
);

console.log(
  `Is ${emailWrong2} - Ok? - `,
  checkEmail(emailWrong2),
);

console.log(
  `Is ${emailGood} - Ok? - `,
  checkEmail(emailGood),
);
