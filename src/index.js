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

function calculateConvertedAmount(conversionRate, amount) {
  return conversionRate * amount;
} //opted to leave this out of the constrcutor since its a utility func

//ui
function printElements(response, currency) {
  const amountInput = document.querySelector('#amount').value;
  const convertedAmount = calculateConvertedAmount(response.conversion_rate, amountInput);
  document.querySelector('#result').innerText = `The exchange rate for ${currency} from USD is ${response.conversion_rate}.
  The converted currency is  ${convertedAmount} ${currency}`;
}

function printError(error, currency) {
  document.querySelector('#result').innerText = `There was an error accessing the exchange rate for ${currency}: 
  ${error}.`;
}             //side note: its hard to get this api to fail due to the key

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  document.querySelector('#currency').value = null;
  getConversionRate(currency);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});