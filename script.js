const word_e1 = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_e1 = document.getElementById('succes-message');   
const wrongLetters_e1 = document.getElementById('worng-letters');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();




function getRandomWord(){
    const words = ["javascript", "java", "python"];
    return words[Math.floor(Math.random() * words.length)];
}


function displayWord(){
    word_e1.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <div class="letter">
        ${correctLetters.includes(letter) ? letter: ''}
    </div>
    `).join('')}
    
    `;
 const w = word_e1.innerText.replace(/\n/g,'');
if(w === selectedWord){
    popup.style.display = 'flex';
    message_e1.innerText = 'Tebrikler Kazandınız';
}
}

function updateWrongLetters() {
wrongLetters_e1.innerHTML = `
 ${wrongLetters.length>0? '<h3>Hatalı halfler</h3>':''}
 ${wrongLetters.map(letter=> `<span>${letter}<span>`)}
   `;
items.forEach((item,index) => {
    const errorCount = wrongLetters.length;


    if(index<errorCount){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
})
    if(wrongLetters.length === items.length){
        popup.style.display = 'flex';
        message_e1.innerText = 'Maalesef Kaybettiniz.';
    }
}
function displayMessage(){
    message.classList.add('show');

    setTimeout(function(){
     message.classList.remove('show');
    }, 2000);
}


window.addEventListener('keydown', function(e) {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            } else{
                displayMessage();
             
            }

        } else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
            updateWrongLetters();
            }
            
        else{
            displayMessage();
        }
     
        }
    }
    
})



displayWord()