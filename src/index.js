import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeRate from './otherScripts';

//business 
async function getConversionRate(currency) {
  const response = await CurrencyExchangeRate.getConversionRate(currency);
  if (response.result) {
    printElements(response, currency);
  } else {
    printError(response, currency);
  }
}


//ui
function printElements(response, currency) {
  document.querySelector('#result').innerText = `The exchange rate for ${currency}  is ${response.conversion_rate}%.
  The converted currency is  `;
}

function printError(error, currency) {
  console.log(error);
  document.querySelector('#result').innerText = `There was an error accessing the exchange rate for ${currency}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  document.querySelector('#currency').value = null;
  getConversionRate(currency);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});