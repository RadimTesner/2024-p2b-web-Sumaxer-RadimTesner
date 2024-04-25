const numbers = [];
let counter = 0;
let card_num = 24;
const toggled_numbers = [];
let sum = 0;
let rounds = 12;

for (let i = 1; i <= card_num; i++) {
    numbers.push(i);
}

numbers.sort(() => .5 - Math.random());

document.addEventListener("DOMContentLoaded", () => {
    
    const container = document.querySelector(".desk");
    for (const num of numbers) {
        const cardElement = document.createElement("figure");
        cardElement.classList.add("card", "active")
        cardElement.innerHTML = `
            <figcaption class="face"><span>${num}</span></figcaption>
            <div class="back yinyang"></div>
        `
        container.appendChild(cardElement)
        cardElement.addEventListener("click", cardClick)
    }

});

const cardClick = (event) => {
    const card = event.currentTarget;
    if (rounds != 0){
        if (!card.classList.contains("turned")) {
            if (counter < 4) {
                card.classList.toggle("turned");
                counter ++;
                rounds--;
                const num = parseInt(card.querySelector("figcaption span").textContent);
                sum += num;
                update();
            }
        } else {
            card.classList.toggle("turned");
            counter --;
            const num = parseInt(card.querySelector("figcaption span").textContent);
            sum -= num;
            update();
        }
    }
}

const update = () => {
    document.getElementById("sumDisplay").textContent = "Score: " + sum;
    document.getElementById("flippedDisplay").textContent = "Cards flipped: " + counter + "/4";
    document.getElementById("roundsDisplay").textContent = "Rounds remaining: " + rounds;
}