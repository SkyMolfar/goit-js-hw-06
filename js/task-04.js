let counterValue = 0; 

const valueRef = document.querySelector('#value'); 

document.querySelector('button[data-action="decrement"]').addEventListener('click', () => { 
  counterValue -= 1; 
  valueRef.textContent = counterValue; 
});

document.querySelector('button[data-action="increment"]').addEventListener('click', () => { 
  counterValue += 1; 
  valueRef.textContent = counterValue; 
});

