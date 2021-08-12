// Import stylesheets
import './style.css';
import { file, time } from '@xdanradu/utils';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log(file.read);
console.log(time.read);
