//business logic
export default class CurrencyExchangeRate {
  static async getConversionRate(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`);
      const jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) { //throw is implied
      return error;
    }
  }
}