import character from './character.js'
import characterData from './data.js';
import { renderLoseModalHTML, renderWinModalHTML, renderShopHTML, showGame, showModal} from './modals.js';

const monstersArray = ['Skeleton', 'Demon', 'Goblin', 'Armored Skeleton', 'Necromancer',
'Vampire', 'Orc', 'Werewolf', 'Armored Necromancer', 'Armored Vampire',
'Elite Skeleton', 'Elite Vampire', 'Dragon'];

let defeatedMonsters = 0;

let hero = new character(characterData.hero);
let monster = '';
let frogSpell = false;
getNextEnemy();

document.getElementById('attack').addEventListener('click', function(){
    hero.throwDiceHTML();
    monster.throwDiceHTML();
    hero.getCurrentDiceScore(monster.currentDiceScore);
    monster.getCurrentDiceScore(hero.currentDiceScore);
    hero.calculateHealthPoints();
    monster.calculateHealthPoints();
    winChecker();
    upgradeChecker();
    render();
})

document.getElementById('spell').addEventListener('click', function(){
    frogSpell = false;
    monster = new character(characterData.frog);
    document.getElementById('spell').classList.add('hidden');
    render();
})

function winChecker(){
    if(monster.health === 0 && monstersArray.length === 0){
        renderWinModalHTML(hero);
    } else if(hero.health === 0 && monster.health === 0){
        renderLoseModalHTML(hero, monster);
    } else if(hero.health === 0){
        renderLoseModalHTML(hero, monster);
    } else if(monster.health === 0){
        defeatedMonsters += 1;
        document.getElementById('attack').disabled = true;
        setTimeout(() => {
            document.getElementById('attack').disabled = false;
            getNextEnemy();
            render();
        }, 2000);
    } 
}

function upgradeChecker(){
    if(defeatedMonsters === 3){
        defeatedMonsters = 0;
        setTimeout(() => {
            shopModal();
        }, 2000);
    }
};

function getNextEnemy(){
    for (const key in characterData) {
        if (characterData[key].name === monstersArray[0]){
            monster = new character(characterData[key]);
        }
    }
    monstersArray.splice(0, 1); 
}

function shopModal(){
    let hiddenClass = frogSpell ? 'hidden' : '';
    let upgradedHero = hero;
    let shopModal = renderShopHTML(hiddenClass);

    showModal();
    document.querySelector(".modal-container").innerHTML = shopModal;

    document.getElementById('upgrade-1').addEventListener('click', function(){
        upgradedHero.health = upgradedHero.maxHealth;
        hero = new character(upgradedHero);
        frogSpell = true;
        document.getElementById("spell").classList.remove('hidden');
        showGame();
        render();
    })

    document.getElementById('upgrade-2').addEventListener('click', function(){
        upgradedHero.diceCount += 1;
        upgradedHero.health = upgradedHero.maxHealth;
        hero = new character(upgradedHero);
        showGame();
        render();
    })

    document.getElementById('upgrade-3').addEventListener('click', function(){
        upgradedHero.maxHealth += 50;
        upgradedHero.health = upgradedHero.maxHealth;
        hero = new character(upgradedHero);
        showGame();
        render();
    })
}

function render(){
    document.getElementById('hero').innerHTML = hero.characterHTML();
    document.getElementById('monsters').innerHTML = monster.characterHTML();
}


render();