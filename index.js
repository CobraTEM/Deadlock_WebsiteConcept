window.onload = loadText;

const textSelect= [
    'text sample 1',
    'text sample 2',
    'text sample 3',
    'text sample 4',
    'text sample 5',
    'text sample 6',
    'text sample 7',
    'text sample 8',
    'text sample 9',
  ];
   
  function getRandomText() {
      const randomIndex = Math.floor(Math.random() * textSelect.length);
      return textSelect[randomIndex];
    }
   
  function loadText() {
    const myDiv = document.getElementById('div_text');
    myDiv.innerHTML= getRandomText();
  }
   

