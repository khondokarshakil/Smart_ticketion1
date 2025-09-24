
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

//  selected seat open display 

function selectedSeat(elementId) {
    const seatName = elementId;
    const className = 'Economy';
    const price = 550;

    const tr = document.createElement("tr");
tr.className = "flex justify-around ";

    tr.innerHTML = `
      <td>${seatName}</td>
      <td>${className}</td>
      <td>${price}</td>

    `;
    
    const seatList = document.getElementById("seat-list");
    seatList.appendChild(tr);


}


// set Background click button  and count seat 

const seats = document.querySelectorAll('.seat');
let count = 0;
let totalprice = 0;
let grantTotal = 0;
let totalDiscount = 0;

for (const btn of seats) {
    btn.addEventListener('click', function (e) {
        const text = e.target.innerText;
        selectedSeat(text);

        if (!btn.classList.contains('selected')) {
            count++;
            //    total price count  
            totalprice = 550 * count;
            setElemetById('total-price', totalprice);

            //grand  total price count  
            grantTotal = totalprice;
            setElemetById('grant-total', grantTotal);

            document.getElementById('seat-count').innerText = count;
            btn.classList.add("selected");
            btn.classList.add("bg-green-500");
            btn.classList.add("text-white");
            setElemetById('seat-count', count);
             
            // total seat count 
            const totalSeat = document.getElementById('total-seat').innerText;
            const remainingSeats = totalSeat - 1;
            setElemetById('total-seat', remainingSeats);

            const couponInput = document.getElementById('coupon');
            const applyBtn = document.getElementById('apply');
               
            //    maximun selected seat after aleart open display
            if (count === 4) {
                alert("You have selected only 4 seats!");
                couponInput.disabled = false;
                applyBtn.disabled = false;

            }
        }

    });
}
      
        
document.getElementById('apply').addEventListener('click', () => {
    const coupon = document.getElementById('coupon').value;
    if (coupon === 'NEW15') {
        grantTotal = grantTotal - totalprice * 15 / 100;
    } else if (coupon == 'Couple 20') {

        grantTotal = grantTotal - totalprice * 20 / 100;

    }
    totalDiscount = totalprice - grantTotal;

    setElemetById('grant-total', grantTotal);
    setElemetById('discount-coupon', totalDiscount);

});



const nextInput = document.getElementById('next-disable');
document.getElementById("number-input").addEventListener('keyup', () => {
    const inputvalue = document.getElementById("number-input").value;
    const value = parseInt(inputvalue);

    if (!isNaN(value)) {
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

function containue(){
    ShowElementById('hide-header');
    ShowElementById('hide-main');
    ShowElementById('hide-footer');
    hideElementById('Continue-hidden');
    location.reload();

    
}