
function renderWinModalHTML(hero){
    let winModal = `
    <div class="modal">
        <h3> The ${hero.name} won this challenging battle!</h3>
        <p class="emoji">🏆</p>
    </div>
    `
    document.querySelector(".game-container").classList.add('hidden');
    document.querySelector(".modal-container").classList.remove('hidden');
    document.querySelector(".modal-container").innerHTML = winModal;
}

function renderLoseModalHTML(hero, monster){
    let loseModal = `
    <div class="modal">
        <h3> The ${hero.name} was defeated by the ${monster.name}</h3>
        <p class="emoji">💀</p>
    </div>
    `
    document.querySelector(".game-container").classList.add('hidden');
    document.querySelector(".modal-container").classList.remove('hidden');
    document.querySelector(".modal-container").innerHTML = loseModal;
}

function renderShopHTML(hiddenClass){
    return `
    <div class="modal">
        <h2> Upgrades </h1>
        <div id="upgrade-1"class="upgrade-window ${hiddenClass}">
            <img class="icon" src="icons/frog-icon.png">
            <p>You get the spell that turns the enemy into a frog.</p>
        </div>

        <div id="upgrade-2"class="upgrade-window">
            <img class="icon" src="icons/dice-icon.png">
            <p>You get one more dice for your character.</p>
        </div>

        <div id="upgrade-3"class="upgrade-window">
            <img class="icon" src="icons/health-icon.png">
            <p>You get more maximal health</p>
            <p class="bold">+50HP</p>
        </div>
    </div>
    `
}

function showModal(){
    document.querySelector(".modal-container").classList.remove('hidden');
    document.querySelector(".game-container").classList.add('hidden');
}

function showGame(){
    document.querySelector(".modal-container").classList.add('hidden');
    document.querySelector(".game-container").classList.remove('hidden');
}

export {renderLoseModalHTML, renderWinModalHTML, renderShopHTML, showModal, showGame}