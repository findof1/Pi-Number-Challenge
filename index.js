const input =  document.getElementById('js-input');
let inputValue = document.getElementById('js-input').value;
let inputLength = document.getElementById('js-input').value.toString().length;
const display = document.getElementById('winning');
const display2 = document.getElementById('digits');
const display3 = document.getElementById('winner');

function setInput(){
inputValue = document.getElementById('js-input').value;
inputLength = document.getElementById('js-input').value.toString().length;
fetcher(1, inputLength); 
if((inputLength + 1) >= 1000){
  display3.innerHTML = 'You Won!!! Or you cheated :('
}else{
  display3.innerHTML = ''
}
}

async function fetcher(starting, num){
  const link = `https://api.pi.delivery/v1/pi?start=${starting}&numberOfDigits=${num}&radix=10`
  const data = await fetch(link);
  const result = await data.json();
  console.log(result.content);
  console.log(inputValue);
  console.log(inputLength);
  if(inputValue == result.content){
    display.innerHTML = 'Valid'
    display2.innerHTML = `Digits:${inputLength + 1}`;
  } else {
    display.innerHTML = 'Invalid'
  }
  
}




