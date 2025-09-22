
function hideElementById(elementId) {
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add("hidden");
}

function ShowElementById(elementId) {
    const showElement = document.getElementById(elementId)
    showElement.classList.remove("hidden");

}

//   set element with id 

function setElemetById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Open main section with click funtion 
document.getElementById('goToMain').addEventListener('click', () => {
    document.getElementById('hide-main').scrollIntoView({
        behavior: "smooth"
    });
});

// set Background click button  and count seat 

const seats = document.querySelectorAll('.seat');
let count = 0;
let totalprice =0;
let grantTotal = 0;


for (const btn of seats) {
    btn.addEventListener('click', () => {
        if (!btn.classList.contains('selected')) {
            count++;
        //    total price count  
            totalprice = 550 * count;
            setElemetById('total-price',totalprice);

        //grand  total price count  
            grantTotal = totalprice;
            setElemetById('grant-total',grantTotal);

            const currentSeat = btn.innerText;
            document.getElementById('selected-seat');
            setElemetById('selected-seat',currentSeat);

            document.getElementById('seat-count').innerText = count;
            btn.classList.add("selected");
            btn.classList.add("bg-green-500");
            btn.classList.add("text-white");
            setElemetById('seat-count', count);

            const totalSeat =  document.getElementById('total-seat').innerText;
            const remainingSeats = totalSeat -1;
            setElemetById('total-seat',remainingSeats);  
            
          const couponInput = document.getElementById('coupon');
          const applyBtn = document.getElementById('apply');
            
            if (count === 4) {
                alert("You have selected 4 seats!");
                couponInput.disabled = false;
                applyBtn.disabled = false;

            }
        }

    });
}

document.getElementById('apply').addEventListener('click',()=>{
        const coupon = document.getElementById('coupon').value;
            if(coupon === 'NEW15'){
                grantTotal = grantTotal - 550*15 / 100;
                console.log(grantTotal);
            }else if (coupon == 'Couple 20'){
                 grantTotal = grantTotal - 550 * 20 / 100;
            }
           setElemetById('grant-total',grantTotal);       
              
        });


const nextInput = document.getElementById('next-disable');
document.getElementById("number-input").addEventListener('keyup', () =>{
    const inputvalue = document.getElementById("number-input").value; 
    const value = parseInt(inputvalue);

    if(!isNaN(value)){   
        nextInput.disabled = false;
    } else {
        nextInput.disabled = true; 
    }
});


function completeSeat() {
    hideElementById('hide-header');
    hideElementById('hide-main');
    hideElementById('hide-footer');
    ShowElementById('success-seat');
}






// function hideElementBy(elementId) {
//   const hideHome = document.getElementById(elementId);
//   hideHome.classList.add("hidden");
// }

// function showElementById(element) {
//   const playGround = document.getElementById(element);
//   playGround.classList.remove("hidden");
// }

// function setBackroundColurById(elementId) {
//   const element = document.getElementById(elementId);
//   element.classList.add("bg-orange-300");
// }

// function removeBackroundColurById(elementId) {
//   const element = document.getElementById(elementId);
//   element.classList.remove("bg-orange-300");
// }

// function handlekeyboardButtonPress(event) {
//   const playerPressd = event.key;
//   // stop the game if pressd 'Esc'
//   if(playerPressd === 'Escape'){
//     gameOver();
//   }
//   const currentAlphabet = document.getElementById("cuurent-alphabet");
//   const sureAlphabet = currentAlphabet.innerText;
//   const expectedAlphabed = sureAlphabet.toLowerCase();

//   // click right or wrong key pressed
//   if (playerPressd === expectedAlphabed) {
//     removeBackroundColurById(expectedAlphabed);

//     const currentScore = getTextElementById("current-score");
//     const updateScore = currentScore + 1;
//     setTextElemenetById("current-score", updateScore);

//     countinue();
//   } else {
//     const currentLife = getTextElementById("current-life");
//     const updateLife = currentLife - 1;
//     setTextElemenetById("current-life", updateLife);

//     if(updateLife === 0){
//         gameOver();
//     }
//   }
// }

// document.addEventListener("keyup", handlekeyboardButtonPress);

// function getTextElementById(elementId) {
//   const element = document.getElementById(elementId);
//   const elementValueTaxt = element.innerText;
//   const value = parseInt(elementValueTaxt);
//   return value;
// }

// function setTextElemenetById(elementId, value) {
//   const element = document.getElementById(elementId);
//   element.innerText = value;
// }

// function getElementTextById(elementId){
//     const element = document.getElementById(elementId);
//     const text = element.innerText;
//     return text ;
// }
// function getARandomAlphabet() {
//   // get or create an alphabet array
//   const alphabetString = "abcdefghigklmnopqrstuvwxyz";
//   const alphabets = alphabetString.split("");

//   // get a random index between 0-25

//   const randomNumber = Math.random() * 25;
//   const index = Math.round(randomNumber);

//   const alphabet = alphabets[index];
//   return alphabet;
// }


// function countinue() {
//   const alphabet = getARandomAlphabet();

//   const currentAlphabetElement = document.getElementById("cuurent-alphabet");
//   currentAlphabetElement.innerText = alphabet;

//   setBackroundColurById(alphabet);
// }

// function play() {
//   hideElementBy("hide-home");
//   hideElementBy('final-score');
//   showElementById("play-ground");

//   //reset score and life 
//   setTextElemenetById('current-life',5);
//   setTextElemenetById('current-score',0);
  
//   countinue();
// }

// function gameOver(){
//     hideElementBy('play-ground');
//     showElementById('final-score');

//     // update final score 
//     // 1.get the final score 
//     const lastScore = getTextElementById('current-score');
//     setTextElemenetById('last-score',lastScore);

//     //clear tha last seclected alphabet highlight 
//        const  alphabetCurrent = getElementTextById('cuurent-alphabet');
//        removeBackroundColurById(alphabetCurrent);

// }