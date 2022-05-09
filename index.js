// Write your code here!

const main = document.getElementById('main');
main.remove();

// const body = document.getElementsByTagName('body');
const newHeader = document.createElement('h1');
newHeader.textContent = 'Kinan is the champion';
newHeader.setAttribute('id', 'victory');
document.body.append(newHeader);