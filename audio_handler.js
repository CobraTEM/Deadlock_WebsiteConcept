window.onload= function(){ loadTextBIG(); loadTextSMALL(); }

const randomIndex = Math.floor(Math.random() * 5);

const textSelect= [
    '"The Next Big Thing It Will Overtake Overwatch For Sure"',
    '"One Of The Most Innovative Games In The MOBA Genre"',
    '"Might Be Better Than Fortnite"',
    '"I\'m Already Addicted!"',
    '"A Unique Take On The MOBA Genre"'
  ];
   

  function getRandomText() {
    return textSelect[randomIndex];
  }

  function loadTextBIG() {
    const myDiv = document.getElementById('div1_text');
    myDiv.innerHTML= getRandomText();
  }
   
  const textSelect2= [
    '- Shroud',
    '- Destructoid',
    '- XQC',
    '- OhnePixel',
    '- PC Gamer'
  ];
   
  function getRandomText2() {
      return textSelect2[randomIndex];
    }

    function loadTextSMALL() {
        const myDiv2 = document.getElementById('div2_text');
        myDiv2.innerHTML= getRandomText2();
      }