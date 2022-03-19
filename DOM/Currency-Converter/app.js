const currencyOneEl = document.querySelector('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
const currenciesEl = document.querySelector('[data-js="currencies-container"]')
const convertedValueEl = document.querySelector('[data-js="converted-value"]')
const valuePrecisionEl = document.querySelector('[data-js="conversion-precision"]')
const timesCurrencyOneEl = document.querySelector('[data-js="currency-one-times"]')

const showAlert = (err) => {
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

const state = (() => {
  let exchangeRate = {}

  return {
    getExchangeRate: () => exchangeRate,
    setExchangeRate: newExchangeRate => {
      if (!newExchangeRate.conversion_rates) {
        showAlert({ message: 'O objeto precisa ter uma propriedade convertion_rates' })
        return
      }
      exchangeRate = newExchangeRate
      return exchangeRate
    }
  }
})()

const getUrl = currency => `https://v6.exchangerate-api.com/v6/d4d8f6895cab53f22b3d6a75/latest/${currency}`

const getErrorMessage = errorType => ({
  "unsupported-code": 'A moeda não existe em nosso banco de dados.',
  "malformed-request": 'O endpoint do requisição deve estar de acordo com a estrutura: https://v6.exchangerate-api.com/v6/<YOUR-API-KEY>/latest/<USD>',
  "invalid-key": 'A chave da API não é válida.',
  "inactive-account": 'Seu email não foi confirmado.',
  "quota-reached": 'Sua conta alcançou o limite requisições permitido para seu plano atual.',
})[errorType] || 'Não foi possível obter as informações.'

const fetchExchangeRate = async url => {
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
    showAlert(err)
  }
}

const showInitialInfo = exchangeRate => {
  const getOptions = selectedCurrency => Object.keys(exchangeRate.conversion_rates)
    .map(currency => `<option ${currency === selectedCurrency ? 'selected' : ''}>${currency}</option>`)
    .join('')
  console.log(getOptions);

  currencyOneEl.innerHTML = getOptions('USD')
  currencyTwoEl.innerHTML = getOptions('BRL')

  convertedValueEl.textContent = exchangeRate.conversion_rates.BRL.toFixed(2)
  valuePrecisionEl.textContent = `1 USD = ${exchangeRate.conversion_rates.BRL} BRL`
}

const init = async () => {
  const exchangeRate = state.setExchangeRate(await fetchExchangeRate(getUrl('USD')))
  if (exchangeRate && exchangeRate.conversion_rates) {
    showInitialInfo(exchangeRate)
  }
}

const showUpdatedRates = exchangeRate => {
  convertedValueEl.textContent = (timesCurrencyOneEl.value * exchangeRate.conversion_rates[currencyTwoEl.value]).toFixed(2)
  valuePrecisionEl.textContent = `1 ${currencyOneEl.value} = ${exchangeRate.conversion_rates[currencyTwoEl.value]} ${currencyTwoEl.value}`
}

timesCurrencyOneEl.addEventListener('input', e => {
  const exchangeRate = state.getExchangeRate()
  convertedValueEl.textContent = (e.target.value * exchangeRate.conversion_rates[currencyTwoEl.value]).toFixed(2)
})

init()

currencyTwoEl.addEventListener('input', e => {
  const exchangeRate = state.getExchangeRate()
  showUpdatedRates(exchangeRate)
})

currencyOneEl.addEventListener('input', async e => {
  const exchangeRate = state.setExchangeRate(await fetchExchangeRate(getUrl(e.target.value)))
  showUpdatedRates(exchangeRate)
})