import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeRate from './otherScripts';

//business 
async function getConversionRate(currency) {
  const response = await CurrencyExchangeRate.getConversionRate(currency);
  if (response.main) {
    printElements(response, currency);
  } else {
    printError(response, currency);
  }
}


//ui

window.addEventListener("load", function() {
  console.log("locked and loaded")
});
