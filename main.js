
const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
// make a passenger object
// add the passenger object on the bus

const passenger = {
    name: name,
    wallet: wallet,
    isStruggling: isStruggling,

    };

    if (seat === 'back') {
        struggleBus.push(passenger);
    }
    else if (seat === 'middle') {
    console.log(struggleBus.length);
    }
    else if (seat === 'front') {
        struggleBus.unshift(passenger);
    }

};
const unloadPassenger = (bus, position) => {
    // remove a passenger form the bus
    // return the passenger object
    if(position === 'front') { 
        console.log(bus);
        console.log("shift first item out of bus ", bus.shift());
        console.log(bus);
        return bus.shift(); //Kicks the Matt with $3 off the bus, shift removes the element at the first index
    }
    else if (position === 'back') {
        return bus.pop(); //Kicks off whoever is in the back of bus (removes the element at the last index i.e. at the end of the array (greg)
    }
};

const allAboard = (canAfford) => {
//loop over the passengers
//given the bus costs 5 bucks
//if the passenger can afford it, charge them
//if NOT kick them off the bus
const busFare = 5;
const validPassengers = [];
canAfford.forEach((passenger) => {
    if(passenger.wallet >= busFare) {
        passenger.wallet -= busFare;
        validPassengers.push(passenger);

    }
});
return validPassengers;
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {  //domstring fxn build from bus parameter
    let domString = '';
    for (let i = 0; i < bus.length; i++) {
        domString += `<div class="bus-seat">`;
        domString +=    `<h4>${bus[i].name}</h4>`;
        domString +=    `<p>${bus[i].wallet}</p>`;
        domString +=    `<p>${bus[i].isStruggling}</p>`;
        domString += `</div>`;
    };
    console.log(domString);
    printToDom('the-bus', domString);
    

};

const init = () => {
    addPassenger('Michael', 3, true, 'front');
    addPassenger('Zoe', 20, false, 'back');
    addPassenger('Greg', 4, false, 'back');
    addPassenger('Saul', 12, true, 'front');
    addPassenger('Matt 1', 5, true, 'front');
    addPassenger('Matt 2', 15, true, 'front');
    addPassenger('Matt 3', 3, true, 'front');
    addPassenger('Sarah', 6, true, 'front');
    addPassenger('Sarah', 2, true, 'middle');


    const firstPassenger = unloadPassenger(struggleBus, 'front');
    console.log(firstPassenger);
    
   const busPeople = allAboard(struggleBus);

    busBuilder(busPeople);

    console.log(struggleBus);

};

init();