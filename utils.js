function getRandomNumArray(diceCount){
    return new Array(diceCount).fill('0').map(function(){
        return Math.floor(Math.random() * 6) + 1;
    })
}

function getImgHTML(num, colorCSS){
    return `<img class="dice-img ${colorCSS}-dice" src="dice/dice-${num}.png">`;
}

function calculateHealth(maxHealth, currentHealth){
    return currentHealth / maxHealth * 100;
}

function calculateHealthBarClass(percentage){
    if (percentage < 30){
        return 'red-bg'
    }
}

function getDiceArray(diceCount){
    let diceArray = new Array(diceCount).fill('0').map(function(){
        return `<div class="dice"></div>`
    }).join("");
    return diceArray;
}

export {getDiceArray, getRandomNumArray, calculateHealth, getImgHTML, calculateHealthBarClass};
