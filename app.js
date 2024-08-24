
import favoriteSneaker from './sneakers.mjs';
import { factTwo, factThree } from './sneakers.mjs';



const favSneaksBtn = document.getElementById('favSneaks');
const factBtn = document.getElementById('funFact');
const factTwoBtn = document.getElementById('funFactTwo');
const log = document.getElementById('log');


const updateResults = (resultElement, result) => {
    resultElement.textContent = result;
};


favSneaksBtn.addEventListener('click', () => {
    const result = favoriteSneaker();
    updateResults(log, result);
});

factBtn.addEventListener('click', () => {
    const result = factTwo();
    updateResults(log, result);
});

factTwoBtn.addEventListener('click', () => {
    const result = factThree();
    updateResults(log, result);
});



