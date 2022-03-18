const currencyOneEl = document.querySelector('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
const currenciesEl = document.querySelector('[data-js="currencies-container"]')

const url = `https://v6.exchangerate-api.com/v6/d4d8f6895cab53f22b3d6a75/latest/USD`

const getErrorMessage = errorType => ({
  "unsupported-code": 'A moeda não existe em nosso banco de dados.',
  "malformed-request": 'O endpoint do requisição deve estar de acordo com a estrutura: https://v6.exchangerate-api.com/v6/<YOUR-API-KEY>/latest/<USD>',
  "invalid-key": 'A chave da API não é válida.',
  "inactive-account": 'Seu email não foi confirmado.',
  "quota-reached": 'Sua conta alcançou o limite requisições permitido para seu plano atual.',
})[errorType] || 'Não foi possível obter as informações.'

const fetchExchangeRate = async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Falha na requisição. Não foi possível obter as informações.')
    }
    const exchangeRateData = await response.json()

    if (exchangeRateData.result === 'error') {
      throw new Error(getErrorMessage(exchangeRateData['error-Type']))
    }
    return exchangeRateData

  } catch (err) {
    const div = document.createElement('div')
    const button = document.createElement('button')

    div.textContent = err.message
    div.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show')
    div.setAttribute('role', 'alert')
    button.classList.add('btn-close')
    button.setAttribute('type', 'button')
    button.setAttribute('aria-label', 'Close')

    button.addEventListener('click', () => {
      div.remove()
    })

    div.appendChild(button)
    currenciesEl.insertAdjacentElement('afterend', div)
  }
}

fetchExchangeRate()

const init = async () => {
  const exchangeRateData = await fetchExchangeRate();

  const getOptions = selectedCurrency => Object.keys(exchangeRateData.conversion_rates)
    .map(currency => `<option ${currency === selectedCurrency ? 'selected' : ''}>${currency}</option>`)
    .join('')
  console.log(getOptions);

  currencyOneEl.innerHTML = getOptions('USD')
  currencyTwoEl.innerHTML = getOptions('BRL')
}

init() 
