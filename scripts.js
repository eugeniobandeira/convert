const exchangeRates = {
    USD: 6.162,
    EUR: 6.317,
    GBP: 7.612
};

const form = document.querySelector('form');
const footer = document.querySelector('main footer');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const description = document.getElementById('description');
const result = document.getElementById('result');

amount.addEventListener('input', () => {
    const hasCharacteresRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharacteresRegex, '');
});

form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, exchangeRates.USD, '$');
            break;
        case 'EUR':
            convertCurrency(amount.value, exchangeRates.EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, exchangeRates.GBP, '£');
            break;
        default:
            alert('Moeda não suportada');
    }
}

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        let total = formatCurrencyBRL(amount * price);
        result.textContent = `${total}`;

        footer.classList.add('show-result');
    } catch (error) {
        footer.classList.remove('show-result');
        console.error(error);
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pr-BR", {
        style: "currency",
        currency: "BRL",
    });
}