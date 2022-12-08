const checkCard = () => {
    let valid = false
    const card = cardEl.value.trim();
    const min = 16,
        max = 16;
    if (isRequired(card) === false) {
        showError(cardEl, 'Card cannot be blank.');
        cardEl.style.borderColor = 'pink'
    }else if(isNumber(card) === false){
        showError(cardEl, 'Card cannot have string')
        cardEl.style.borderColor = 'pink'
    }else if (isBetween(card.length, min, max) === false) {
        showError(cardEl, `Card must have 16 digits`)
        cardEl.style.borderColor = 'pink'
    }else {
        luhnAlgorithm = encryptCard(card);
    }

    if (luhnAlgorithm === true){
        valid = true;
    }
    return valid;
}

1234 5678 9123 45678
1234 5678 9123 4567