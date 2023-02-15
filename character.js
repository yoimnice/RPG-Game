import {getDiceArray, getRandomNumArray, calculateHealth, getImgHTML, calculateHealthBarClass} from "./utils.js";

class character {
    constructor(data){
        Object.assign(this, data);
        this.diceHTML = getDiceArray(this.diceCount);
        this.currentDiceScore = getRandomNumArray(this.diceCount);
        this.maxHealth = this.health;
        this.gottenDamageSum = 0;
    }
    throwDiceHTML(){
        const {color} = this;
        this.currentDiceScore = getRandomNumArray(this.diceCount);
        let throwDiceHTML = this.currentDiceScore.map(function(num){
            return `<div class='dice'>${getImgHTML(num, color)}</div>`
        }).join('');
        this.diceHTML = throwDiceHTML;
    }
    healthBarHTML(){
        const percentage = calculateHealth(this.maxHealth, this.health)
        let healthBarClass = calculateHealthBarClass(percentage);
        return `
        <div class="health-bar-empty">
            <div class="health-bar ${healthBarClass}" style="width:${percentage}%">
                <div class="hp-circle ${healthBarClass}">
                    <p id="character-hp" class="health-count prevent-select">${this.health}</p>
                </div>
            </div>
        </div>
        `
    }
    getCurrentDiceScore(currentDiceScore){
        this.gottenDamageSum = currentDiceScore.reduce((sum, number) => sum + number);
    }
    calculateHealthPoints(){
       this.health = this.health - this.gottenDamageSum;
       if (this.health <= 0){
        this.health = 0;
       }
    }
    characterHTML(){
        const {name, avatar, color, diceHTML} = this;
        const healthBarHTML = this.healthBarHTML()
        return `
        <div class="card ${color}">
            <div class="round-picture hero ${color}">
                <img src=${avatar} class="character-pic prevent-select">
            </div>
            <div class="health-bar-container">
                ${healthBarHTML};
            </div>
            <div class="dice-container">
                ${diceHTML}
            </div>
        </div>
        `
    }
}

export default character;