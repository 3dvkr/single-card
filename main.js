document.querySelector('.options').addEventListener('click', advanceOption);
document.querySelector('.choose p').addEventListener('click', switchOptions);
document.querySelector('.hideRequest').addEventListener('click', hideP);

function advanceOption() {
    let cards = Array.from(document.querySelectorAll('.optionContainer')).filter(x => !x.classList.contains('filterOut'));
    let i = 0;
    for (card of cards) {
        if (!card.classList.contains('hide')) {
            card.classList.add('hide');
            (i + 1 == cards.length) ? i = 0 : i++;
            cards[i].classList.remove('hide');
            break;
        }
        i++;
    }
}

function switchOptions(event) {
    let options = document.querySelectorAll('.choose .menuSwitch');
    options.forEach(selection => {
        selection.classList.remove('chosen');
    event.target.classList.add('chosen');
    })
    filterCards(options);
}

function hideP() {
    document.querySelector('p.instructions').classList.add('hide');
}

function filterCards(cardLabels) {
    let cards = Array.from(cardLabels)
    let label = cards.filter(x => x.classList.contains('chosen'))[0].outerText;
    if (label == 'Restaurant') {
        cardDeckSwap('.studio', '.resto');
    } else if (label == 'Studio') {
        cardDeckSwap('.resto', '.studio');
    }
}

function cardDeckSwap(tag, notTag) {
    document.querySelectorAll(tag).forEach(x => x.classList.add('filterOut'));
    document.querySelectorAll(notTag).forEach(
        x => {
            x.classList.remove('filterOut');
            x.classList.add('hide');
        });
    document.querySelectorAll(notTag)[0].classList.remove('hide');
}
